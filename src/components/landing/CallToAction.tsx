import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import Button from '../ui/button';
import { ArrowRight, X, CheckCircle, AlertCircle } from 'lucide-react';

const failurePoints = [
  'Continue buying games that complicate connection and tolerate superficiality',
  'Another boring, forgettable game night filled with small talk',
  'The frustration and anxiety from failing to achieve authentic connections',
  'Wasted time and money on gatherings that never go deeper',
];

const successPoints = [
  'Invest in MaskOff and guarantee every gathering is a victory for authenticity',
  'Laughter, energy, and genuine excitement at every game night',
  'Become the legendary host who creates authentic, memorable experiences',
  'Deep friendships built on real conversations and honest moments',
];

export function CallToAction() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="py-24 px-4 relative overflow-hidden bg-alt">
      <div ref={ref} className="max-w-6xl mx-auto relative z-10">
        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="inline-flex items-center gap-2 bg-destructive/20 border border-destructive/50 rounded-full px-4 py-2 mb-8 mx-auto w-fit"
        >
          <AlertCircle className="h-4 w-4 text-destructive" />
          <span className="text-destructive text-sm font-semibold uppercase tracking-wide">
            The Moment of Truth
          </span>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-center leading-tight"
        >
          <span className="text-foreground">THE CHOICE IS SIMPLE.</span>
          <br />
          <span className="text-primary">WHAT WILL YOU CHOOSE?</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-xl text-muted text-center mb-16 max-w-3xl mx-auto"
        >
          Every decision has consequences. Which path will you take?
        </motion.p>

        {/* The Contrast: Failure vs Success */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* OPTION A: The Failure */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="relative group"
          >
            {/* Card */}
            <div className="relative bg-card border-2 border-destructive/50 rounded-3xl p-8 backdrop-blur-sm hover:border-destructive transition-all duration-300">
              {/* Icon */}
              <div className="text-7xl mb-6 text-center grayscale">😔</div>

              {/* Title */}
              <h3 className="text-3xl font-black text-destructive mb-6 text-center">
                OPTION A
                <span className="block text-xl text-muted font-normal mt-2">The Failure</span>
              </h3>

              {/* Pain Points */}
              <ul className="space-y-4 mb-8">
                {failurePoints.map((point, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <X className="h-6 w-6 text-destructive shrink-0 mt-1" />
                    <span className="text-muted leading-relaxed">{point}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Warning Badge */}
              <div className="bg-destructive/20 border border-destructive/50 rounded-xl p-4 text-center">
                <p className="text-destructive font-semibold text-sm">
                  ⚠️ The path of superficiality
                </p>
              </div>
            </div>
          </motion.div>

          {/* OPTION B: The Success */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="relative group"
          >
            {/* Card */}
            <div className="relative bg-primary/10 border-2 border-primary rounded-3xl p-8 backdrop-blur-sm hover:border-primary/80 hover:shadow-lg transition-all duration-300">
              {/* Icon */}
              <div className="text-7xl mb-6 text-center">🎉</div>

              {/* Title */}
              <h3 className="text-3xl font-black text-primary mb-6 text-center">
                OPTION B
                <span className="block text-xl text-foreground font-normal mt-2">The Success</span>
              </h3>

              {/* Success Points */}
              <ul className="space-y-4 mb-8">
                {successPoints.map((point, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <span className="text-foreground leading-relaxed font-medium">{point}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Success Badge */}
              <div className="bg-primary/30 border border-primary/50 rounded-xl p-4 text-center">
                <p className="text-primary font-bold text-sm">✨ The path of authenticity</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Final Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <motion.p className="text-3xl md:text-4xl font-bold mb-8 leading-relaxed">
            <span className="text-foreground">Don't let the Villain win.</span>
            <br />
            <span className="text-primary">Claim your Guide.</span>
          </motion.p>

          {/* Giant CTA Button */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-2xl md:text-3xl px-16 py-8 md:px-20 md:py-10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <span className="flex items-center gap-4">
                <span className="font-black">BACK THIS PROJECT</span>
                <motion.div
                  animate={{ x: [0, 10, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="h-10 w-10" />
                </motion.div>
              </span>
            </Button>
          </motion.div>

          {/* Urgency reminder */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1.2 }}
            className="mt-6 text-muted"
          >
            <span className="text-primary font-semibold">Limited Time</span> • Only{' '}
            <span className="text-primary font-semibold">72 hours</span> remaining
          </motion.p>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 1 }}
        className="text-center mt-24 text-muted text-sm"
      >
        <p>© 2025 MaskOff Card Game. All rights reserved.</p>
        <p className="mt-2">Powered by BackerKit</p>
      </motion.div>
    </section>
  );
}
