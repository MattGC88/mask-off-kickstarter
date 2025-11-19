import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import Button from '../ui/button';
import { Shield, ArrowRight } from 'lucide-react';

const authorityPoints = [
  {
    maskImage: '/images/bamileke-mask.svg',
    stat: '57 Cards, 10 Unique Powers',
    description: 'Simple design meets deep strategy. Every card is a decision that matters.',
  },
  {
    maskImage: '/images/tlaloc-mask.svg',
    stat: '10-Minute Rounds',
    description: 'Easy to start, impossible to stop. Perfect for any gathering length.',
  },
  {
    maskImage: '/images/maori-mask.svg',
    stat: 'Domino-Inspired Rules',
    description: 'Explained in 60 seconds. No complicated rulebook to kill the vibe.',
  },
];

export function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-24 px-4 relative overflow-hidden bg-background">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-8"
        >
          <Shield className="h-4 w-4 text-primary" />
          <span className="text-primary text-sm font-semibold uppercase tracking-wide">
            Your Guide
          </span>
        </motion.div>

        {/* Title */}
        <div className="mb-6">
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.8 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ type: 'spring', stiffness: 100, damping: 15 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black mb-2 leading-tight"
          >
            <span className="text-foreground">MEET YOUR GUIDE:</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.8 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ type: 'spring', stiffness: 100, damping: 15, delay: 0.2 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl font-black leading-tight"
          >
            <span className="text-primary">MASKOFF IS THE CURE</span>
          </motion.div>
        </div>

        {/* Empathy Statement */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: 'spring', stiffness: 80, delay: 0.4 }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-muted mb-16 max-w-4xl leading-relaxed font-bold"
        >
          We understand the frustration of disconnection. That's why we didn't just create a game—we
          created a{' '}
          <motion.span
            initial={{ scale: 1 }}
            animate={isInView ? { scale: [1, 1.1, 1] } : {}}
            transition={{ duration: 0.5, delay: 1, repeat: Infinity, repeatDelay: 3 }}
            className="text-primary font-black text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl"
          >
            tool for authenticity
          </motion.span>
          .
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden bg-secondary p-8">
              {/* MaskOff table illustration */}
              <img
                src="/images/masktable.png"
                alt="MaskOff card game on table"
                className="w-full h-auto rounded-xl"
              />
            </div>
          </motion.div>

          {/* Authority Points */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            className="space-y-6"
          >
            {authorityPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 100, scale: 0.8 }}
                animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
                transition={{
                  type: 'spring',
                  stiffness: 100,
                  damping: 12,
                  delay: 0.6 + index * 0.2,
                }}
                whileHover={{ scale: 1.05, x: 10 }}
                className="group"
              >
                <div className="flex items-start gap-4 sm:gap-6 bg-card border-2 border-border rounded-xl p-6 hover:border-primary transition-all duration-300">
                  <div className="shrink-0 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 flex items-center justify-center">
                    <img
                      src={point.maskImage}
                      alt="Feature icon"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <motion.h3
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ delay: 0.8 + index * 0.2 }}
                      className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-foreground mb-3"
                    >
                      {point.stat}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ delay: 1 + index * 0.2 }}
                      className="text-muted text-sm sm:text-base md:text-lg"
                    >
                      {point.description}
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center"
        >
          <a
            href="https://www.backerkit.com/call_to_action/76df4bd8-01ac-412d-b684-39c90284624b/landing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-sm sm:text-base md:text-lg px-8 py-5 sm:px-10 sm:py-6 md:px-12 md:py-7 rounded-xl shadow-lg hover:shadow-xl transition-all group"
            >
              BACK THIS PROJECT
              <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-x-2 transition-transform" />
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
