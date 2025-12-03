import { motion } from 'motion/react';

interface PayPalButtonProps {
  amount?: string; // Default: "$1"
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  showIcon?: boolean;
}

export function PayPalButton({
  amount = '$1',
  variant = 'primary',
  size = 'lg',
  showIcon = true,
}: PayPalButtonProps) {
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
      <form
        action="https://www.paypal.com/ncp/payment/X96TVTCDR5FFL"
        method="post"
        target="_blank"
        className="inline-grid justify-items-center align-content-start gap-2"
      >
        <button
          type="submit"
          className={`${buttonVariants[variant]} ${sizeVariants[size]} font-bold transition-all duration-500 group relative overflow-hidden border-none cursor-pointer`}
        >
          {/* Button Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <span className="relative flex items-center gap-2 md:gap-3">
            {showIcon && (
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              ></motion.div>
            )}
            <span className="font-black tracking-tight">DONATE {amount} • SUPPORT THE PROJECT</span>
          </span>
        </button>

        {/* Payment Method Icons */}
        <img
          src="https://www.paypalobjects.com/images/Debit_Credit_APM.svg"
          alt="Accepted payment methods: Debit, Credit, and more"
          className="h-6"
        />

        {/* Powered by PayPal */}
        <section className="text-xs flex items-center gap-1 text-gray-600">
          <span>Powered by</span>
          <img
            src="https://www.paypalobjects.com/paypal-ui/logos/svg/paypal-wordmark-color.svg"
            alt="PayPal"
            className="h-3.5"
            style={{ filter: 'none' }}
          />
        </section>
      </form>
    </motion.div>
  );
}
