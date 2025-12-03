import { motion, useScroll, useTransform } from 'motion/react';
import { useState, useEffect } from 'react';
import { Clock, Zap, Users } from 'lucide-react';

export function UrgencyBar() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [300, 400], [0, 1]);

  useEffect(() => {
    const unsubscribe = scrollY.on('change', (latest) => {
      setIsVisible(latest > 400);
    });

    return () => unsubscribe();
  }, [scrollY]);

  if (!isVisible) return null;

  return (
    <motion.div
      style={{ opacity }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      exit={{ y: -100 }}
      className="fixed top-0 left-0 right-0 z-50 bg-foreground/95 backdrop-blur-md border-b-2 border-primary shadow-2xl"
    >
      <div className="max-w-7xl mx-auto px-4 py-3 sm:py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          {/* Left: Campaign Status */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 justify-center sm:justify-start">
            {/* Countdown */}
            <div className="flex items-center gap-2 bg-accent/20 border border-accent/40 rounded-full px-3 py-1.5">
              <Clock className="w-4 h-4 text-accent" />
              <span className="text-background text-xs sm:text-sm font-bold">
                <span className="text-accent">72 hours</span> left
              </span>
            </div>

            {/* Backer Count */}
            <div className="flex items-center gap-2 bg-primary/20 border border-primary/40 rounded-full px-3 py-1.5">
              <Users className="w-4 h-4 text-primary" />
              <span className="text-background text-xs sm:text-sm font-bold">
                <span className="text-primary">250+</span> backers
              </span>
            </div>

            {/* Early Bird Status */}
            <div className="flex items-center gap-2 bg-accent/20 border border-accent/40 rounded-full px-3 py-1.5">
              <Zap className="w-4 h-4 text-accent" />
              <span className="text-background text-xs sm:text-sm font-bold">
                Early Bird: <span className="text-accent">50 left</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Pulse Border */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent">
        <motion.div
          className="h-full bg-primary"
          animate={{
            x: ['-100%', '100%'],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>
    </motion.div>
  );
}

export default UrgencyBar;
