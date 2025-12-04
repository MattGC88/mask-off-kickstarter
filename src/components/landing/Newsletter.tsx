import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import Button from '../ui/button';
import { Mail, CheckCircle2, AlertCircle } from 'lucide-react';

export function Newsletter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes('@')) {
      setStatus('error');
      setMessage('Please enter a valid email address');
      return;
    }

    setStatus('loading');

    try {
      // Call Vercel serverless function
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('success');
        setMessage(data.message || 'Thanks for subscribing! Check your email for updates.');
        setEmail('');
      } else {
        throw new Error(data.error || 'Subscription failed');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Oops! Something went wrong. Please try again.');
      console.error('Newsletter subscription error:', error);
    }
  };

  return (
    <section
      ref={ref}
      className="py-16 px-4 bg-gradient-to-b from-alt to-background relative overflow-hidden"
    >
      {/* Background Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 0.15, scale: 1 } : {}}
          transition={{ duration: 1.5 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/30 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="bg-card/80 backdrop-blur-xl border-2 border-accent/30 rounded-3xl p-8 md:p-12 text-center"
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-accent/20 via-accent/10 to-transparent border border-accent/30 mb-6"
          >
            <Mail className="w-8 h-8 md:w-10 md:h-10 text-accent" strokeWidth={2.5} />
          </motion.div>

          {/* Title */}
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 leading-tight"
          >
            <span className="text-foreground">Stay in the Loop</span>
          </motion.h3>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-muted mb-8 max-w-2xl mx-auto"
          >
            Get exclusive updates, behind-the-scenes content, and early access to new MaskOff
            releases
          </motion.p>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto mb-6"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              disabled={status === 'loading' || status === 'success'}
              className="flex-1 px-6 py-4 rounded-xl bg-background border-2 border-border focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 text-foreground placeholder:text-muted transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            />
            <Button
              type="submit"
              size="lg"
              disabled={status === 'loading' || status === 'success'}
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-xl font-bold text-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'loading'
                ? 'Subscribing...'
                : status === 'success'
                  ? 'Subscribed!'
                  : 'Subscribe'}
            </Button>
          </motion.form>

          {/* Status Message */}
          {(status === 'success' || status === 'error') && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex items-center justify-center gap-2 text-sm md:text-base ${
                status === 'success' ? 'text-accent' : 'text-destructive'
              }`}
            >
              {status === 'success' ? (
                <CheckCircle2 className="w-5 h-5" />
              ) : (
                <AlertCircle className="w-5 h-5" />
              )}
              <span>{message}</span>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
