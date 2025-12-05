/**
 * Vercel Serverless Function
 * Subscribes email to Shopify customer list
 */

// Simple in-memory rate limiting (for serverless, consider using Vercel KV or Upstash)
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW = 60000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 3; // 3 requests per minute per IP

function checkRateLimit(identifier) {
  const now = Date.now();
  const userRequests = rateLimitMap.get(identifier) || [];

  // Remove old requests outside the window
  const recentRequests = userRequests.filter((time) => now - time < RATE_LIMIT_WINDOW);

  if (recentRequests.length >= MAX_REQUESTS_PER_WINDOW) {
    return false;
  }

  recentRequests.push(now);
  rateLimitMap.set(identifier, recentRequests);

  // Cleanup old entries periodically
  if (rateLimitMap.size > 1000) {
    rateLimitMap.clear();
  }

  return true;
}

function validateEmail(email) {
  // RFC 5322 compliant email regex (simplified)
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

  if (!email || typeof email !== 'string') {
    return false;
  }

  // Length checks
  if (email.length > 254 || email.length < 3) {
    return false;
  }

  const [localPart, domain] = email.split('@');
  if (!localPart || !domain || localPart.length > 64) {
    return false;
  }

  return emailRegex.test(email);
}

function sanitizeEmail(email) {
  return email.trim().toLowerCase();
}

export default async function handler(req, res) {
  const allowedOrigins = [
    'https://maskoff.xyz',
    'https://www.maskoff.xyz',
    process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : null,
  ].filter(Boolean);

  const origin = req.headers.origin;

  // CORS - restrict to allowed origins
  if (
    origin &&
    allowedOrigins.some((allowed) => origin === allowed || origin.endsWith('.vercel.app'))
  ) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Access-Control-Allow-Credentials', 'true');
  }

  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Rate limiting by IP
    const identifier =
      req.headers['x-forwarded-for']?.split(',')[0] || req.headers['x-real-ip'] || 'unknown';

    if (!checkRateLimit(identifier)) {
      return res.status(429).json({
        error: 'Too many requests. Please try again later.',
      });
    }

    // Body size check (Vercel has built-in limits, but good to validate)
    const bodyString = JSON.stringify(req.body);
    if (bodyString.length > 1024) {
      // 1KB limit
      return res.status(413).json({ error: 'Request too large' });
    }

    const { email } = req.body;

    // Validate email
    if (!validateEmail(email)) {
      return res.status(400).json({ error: 'Invalid email address' });
    }

    // Sanitize email
    const sanitizedEmail = sanitizeEmail(email);

    const shopifyDomain = process.env.SHOPIFY_STORE_DOMAIN;
    const accessToken = process.env.SHOPIFY_ADMIN_API_TOKEN;

    // Check environment variables
    if (!shopifyDomain || !accessToken) {
      console.error('Missing Shopify credentials');
      return res.status(500).json({
        error: 'Service temporarily unavailable',
      });
    }

    // Create customer in Shopify with newsletter subscription
    const response = await fetch(`https://${shopifyDomain}/admin/api/2024-01/customers.json`, {
      method: 'POST',
      headers: {
        'X-Shopify-Access-Token': accessToken,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        customer: {
          email: sanitizedEmail,
          email_marketing_consent: {
            state: 'subscribed',
            opt_in_level: 'single_opt_in',
            consent_updated_at: new Date().toISOString(),
          },
          tags: 'maskoff-newsletter,landing-page',
          note: 'Subscribed via MaskOff landing page',
        },
      }),
    });

    const data = await response.json();

    // Handle Shopify API errors
    if (!response.ok) {
      console.error('Shopify API Error:', {
        status: response.status,
        email: sanitizedEmail,
        errors: data.errors,
      });

      // Check if customer already exists
      if (data.errors && data.errors.email) {
        return res.status(200).json({
          success: true,
          message: 'You are already subscribed!',
        });
      }

      // Don't leak internal error details
      return res.status(500).json({
        error: 'Unable to process subscription. Please try again later.',
      });
    }

    console.log('Successfully subscribed:', sanitizedEmail);

    return res.status(200).json({
      success: true,
      message: 'Successfully subscribed to newsletter!',
    });
  } catch (error) {
    console.error('Subscription error:', {
      message: error.message,
      stack: error.stack,
    });

    // Don't expose error details to client
    return res.status(500).json({
      error: 'An error occurred. Please try again later.',
    });
  }
}
