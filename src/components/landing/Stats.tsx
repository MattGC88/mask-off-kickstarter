import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import Button from '../ui/button';
import { Shield, ArrowRight, Zap, Users, Clock, Target } from 'lucide-react';

const gameplaySteps = [
  {
    step: 1,
    title: 'Draw a Truth',
    visual: '/illustrations/bamileke-card.png',
    description: 'Every card asks a question that cuts through the surface',
    example: '"What mask do you wear at work?"',
  },
  {
    step: 2,
    title: 'Match or Power',
    visual: '/illustrations/tlaloc-card.png',
    description: 'Match the color/symbol or play a power card to change everything',
    example: "Use STEAL to take someone's deepest secret",
  },
  {
    step: 3,
    title: 'Truth Revealed',
    visual: '/illustrations/maori-card.png',
    description: 'Answer honestly. Watch connections form. Win by being authentic.',
    example: 'First to run out of masks wins the game',
  },
];

const quickStats = [
  {
    icon: Users,
    value: '3-8',
    label: 'Players',
  },
  {
    icon: Clock,
    value: '10-60',
    label: 'Minutes',
  },
  {
    icon: Zap,
    value: '57',
    label: 'Cards',
  },
  {
    icon: Target,
    value: '10',
    label: 'Powers',
  },
];

export function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-12 sm:py-16 md:py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-6"
        >
          <Shield className="h-4 w-4 text-primary" />
          <span className="text-primary text-sm font-semibold uppercase tracking-wide">
            Your Guide
          </span>
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: 'spring', stiffness: 100, damping: 15 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-3 leading-tight"
        >
          <span className="text-foreground">HOW IT</span>{' '}
          <span className="text-primary">WORKS</span>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: 'spring', stiffness: 80, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-muted mb-10 max-w-2xl leading-relaxed font-bold"
        >
          Brutal honesty disguised as{' '}
          <span className="text-primary font-black text-lg sm:text-xl md:text-2xl">
            addictive gameplay
          </span>
          . Learn in 60 seconds.
        </motion.p>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="mb-10"
        >
          <div className="bg-primary/10 border border-primary/30 rounded-2xl p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {quickStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="text-center"
                >
                  <stat.icon className="w-6 h-6 mx-auto mb-2 text-primary" />
                  <div className="text-2xl font-black text-primary mb-1">{stat.value}</div>
                  <div className="text-xs text-muted font-semibold">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Gameplay Steps - Horizontal 3-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {gameplaySteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                type: 'spring',
                stiffness: 100,
                damping: 12,
                delay: 0.5 + index * 0.15,
              }}
              className="relative"
            >
              {/* Step Number Badge */}
              <div className="flex items-center gap-2 mb-3">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-xl font-black text-primary-foreground">{step.step}</span>
                </div>
                <h3 className="text-xl md:text-2xl font-black text-foreground">{step.title}</h3>
              </div>

              {/* Card Visual */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6 + index * 0.15 }}
                className="mb-4"
              >
                <div className="relative group">
                  <div className="absolute inset-0 bg-primary/20 rounded-xl blur-lg group-hover:blur-xl transition-all" />
                  <img
                    src={step.visual}
                    alt={step.title}
                    className="relative w-full max-w-[180px] mx-auto h-auto rounded-xl border-2 border-primary/30 shadow-lg transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </motion.div>

              {/* Description */}
              <p className="text-sm md:text-base text-muted mb-3 leading-relaxed">
                {step.description}
              </p>

              {/* Example Card */}
              <div className="bg-card border-2 border-accent/30 rounded-lg p-3">
                <p className="text-xs text-accent font-bold mb-1">Example:</p>
                <p className="text-sm text-foreground font-semibold italic">{step.example}</p>
              </div>

              {/* Arrow between steps (desktop only) */}
              {index < gameplaySteps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.7 + index * 0.15 }}
                  className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10"
                >
                  <ArrowRight className="w-6 h-6 text-primary" />
                </motion.div>
              )}
            </motion.div>
          ))}
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
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-sm sm:text-base md:text-lg px-8 py-4 sm:px-10 sm:py-5 md:px-12 md:py-6 rounded-xl shadow-lg hover:shadow-xl transition-all group"
            >
              BACK THIS PROJECT
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
