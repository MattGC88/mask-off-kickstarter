/**
 * Vercel Serverless Function
 * Subscribes email to Shopify customer list
 */

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

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
    const { email } = req.body;

    // Validate email
    if (!email || !email.includes('@')) {
      return res.status(400).json({ error: 'Valid email required' });
    }

    const shopifyDomain = process.env.SHOPIFY_STORE_DOMAIN;
    const accessToken = process.env.SHOPIFY_ADMIN_API_TOKEN;

    // Check environment variables
    if (!shopifyDomain || !accessToken) {
      console.error('Missing Shopify credentials');
      return res.status(500).json({
        error: 'Server configuration error',
        details: 'Missing Shopify credentials',
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
          email: email,
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
      console.error('Shopify API Error:', data);

      // Check if customer already exists
      if (data.errors && data.errors.email) {
        return res.status(200).json({
          success: true,
          message: 'You are already subscribed!',
        });
      }

      return res.status(response.status).json({
        error: 'Failed to subscribe',
        details: data.errors || 'Unknown error',
      });
    }

    console.log('Successfully subscribed:', email);

    return res.status(200).json({
      success: true,
      message: 'Successfully subscribed to newsletter!',
    });
  } catch (error) {
    console.error('Subscription error:', error);
    return res.status(500).json({
      error: 'Internal server error',
      details: error.message,
    });
  }
}
