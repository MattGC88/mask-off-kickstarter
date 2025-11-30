import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Play, ArrowRight } from 'lucide-react';

const gameplaySteps = [
  {
    step: 1,
    image: '/illustrations/bamileke-card.png',
    action: 'Player Draws',
    question: '"What\'s your biggest fear?"',
    glowClass: 'bg-primary/20',
  },
  {
    step: 2,
    image: '/illustrations/tlaloc-card.png',
    action: 'Match or Power',
    question: 'Color match or use POWER CARD',
    glowClass: 'bg-secondary/20',
  },
  {
    step: 3,
    image: '/illustrations/maori-card.png',
    action: 'Truth Revealed',
    question: 'Connection made. Game on.',
    glowClass: 'bg-accent/20',
  },
];

export function GameplayPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 relative bg-background">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-8"
        >
          <Play className="h-4 w-4 text-primary" />
          <span className="text-primary text-sm font-semibold uppercase tracking-wide">
            See It In Action
          </span>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 sm:mb-6 text-center"
        >
          <span className="text-foreground">HOW A GAME</span>{' '}
          <span className="text-primary">UNFOLDS</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl text-muted text-center mb-8 sm:mb-12 md:mb-16 max-w-2xl mx-auto leading-relaxed"
        >
          Three simple steps. Infinite authentic moments.
        </motion.p>

        {/* 3-Step Visual Flow */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-4 lg:gap-6 mb-8 sm:mb-10 md:mb-12">
          {gameplaySteps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.2 }}
              className="relative"
            >
              {/* Step Number Badge */}
              <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 z-20 w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-xl sm:rounded-2xl flex items-center justify-center shadow-xl rotate-12">
                <span className="text-xl sm:text-2xl font-black text-primary-foreground">
                  {step.step}
                </span>
              </div>

              {/* Card Container */}
              <div className="relative group">
                {/* Glow Effect */}
                <div
                  className={`absolute inset-0 ${step.glowClass} rounded-2xl blur-xl group-hover:blur-2xl transition-all`}
                />

                {/* Card Image */}
                <div className="relative bg-card border-2 border-border hover:border-primary rounded-xl sm:rounded-2xl p-3 sm:p-4 overflow-hidden transition-all duration-300 group-hover:scale-105">
                  <img
                    src={step.image}
                    alt={step.action}
                    className="w-full h-32 sm:h-40 md:h-48 lg:h-56 object-cover rounded-lg sm:rounded-xl mb-3 sm:mb-4"
                  />

                  {/* Action Label */}
                  <div className="text-center">
                    <h3 className="text-base sm:text-xl md:text-2xl font-black text-foreground mb-2">
                      {step.action}
                    </h3>
                    <div className="bg-accent/10 border border-accent/30 rounded-lg px-2 py-1.5 sm:px-3 sm:py-2">
                      <p className="text-xs sm:text-sm md:text-base text-foreground font-semibold italic">
                        {step.question}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Connector Arrow (except for last step) */}
              {index < gameplaySteps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.2 }}
                  className="hidden md:flex absolute top-1/2 -right-6 transform -translate-y-1/2 z-10"
                >
                  <ArrowRight
                    className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-primary"
                    strokeWidth={3}
                  />
                </motion.div>
              )}

              {/* Mobile Arrow (below) */}
              {index < gameplaySteps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.2 }}
                  className="md:hidden flex justify-center my-4"
                >
                  <ArrowRight className="w-6 h-6 text-primary rotate-90" strokeWidth={2.5} />
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9 }}
          className="text-center bg-primary/10 border-2 border-primary/30 rounded-2xl p-6 sm:p-8"
        >
          <p className="text-xl sm:text-2xl md:text-3xl font-black text-foreground mb-2">
            That's it. Seriously.
          </p>
          <p className="text-base sm:text-lg text-muted">
            Learn the rules in 60 seconds. Master the strategy over a lifetime.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default GameplayPreview;
