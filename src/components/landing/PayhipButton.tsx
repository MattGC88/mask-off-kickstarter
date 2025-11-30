import { motion } from 'motion/react';
import { useEffect } from 'react';
import Button from '../ui/button';
import { Heart, Sparkles } from 'lucide-react';

interface PayhipButtonProps {
  productId?: string; // Your Payhip product ID
  amount?: string; // Default: "$1"
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  showIcon?: boolean;
}

export function PayhipButton({
  productId = 'YOUR_PAYHIP_PRODUCT_ID',
  amount = '$1',
  variant = 'primary',
  size = 'lg',
  showIcon = true,
}: PayhipButtonProps) {
  useEffect(() => {
    // Load Payhip script
    const script = document.createElement('script');
    script.src = 'https://payhip.com/payhip.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const handlePayhipClick = () => {
    // Payhip integration - opens checkout modal
    if (typeof window !== 'undefined' && (window as any).Payhip) {
      (window as any).Payhip.Checkout.open({
        product: productId,
      });
    } else {
      // Fallback: direct link if script hasn't loaded
      window.open(`https://payhip.com/b/${productId}`, '_blank');
    }
  };

  const buttonVariants = {
    primary:
      'bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground shadow-xl hover:shadow-primary/50',
    secondary:
      'bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 text-accent-foreground shadow-xl hover:shadow-accent/50',
  };

  const sizeVariants = {
    sm: 'text-base px-6 py-3 rounded-xl',
    md: 'text-lg px-8 py-4 rounded-xl',
    lg: 'text-xl md:text-2xl px-10 py-5 md:px-12 md:py-6 rounded-2xl',
  };

  return (
    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
      <Button
        onClick={handlePayhipClick}
        size={size === 'lg' ? 'lg' : 'default'}
        className={`${buttonVariants[variant]} ${sizeVariants[size]} font-bold transition-all duration-500 group relative overflow-hidden`}
      >
        {/* Button Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <span className="relative flex items-center gap-2 md:gap-3">
          {showIcon && (
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Heart className="w-5 h-5 md:w-6 md:h-6 fill-current" strokeWidth={2.5} />
            </motion.div>
          )}
          <span className="font-black tracking-tight">
            DONATE {amount} • SUPPORT THE PROJECT
          </span>
          {showIcon && <Sparkles className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2.5} />}
        </span>
      </Button>
    </motion.div>
  );
}
