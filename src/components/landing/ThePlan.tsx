import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import Button from '../ui/button';
import { Gift, Rocket, Package, ArrowRight, MapPin } from 'lucide-react';

const steps = [
  {
    step: '01',
    title: 'Join the VIP List',
    subtitle: '(The Low-Risk Yes)',
    description:
      'Register on our VIP list and claim the expansion card for just $1. Zero commitment, maximum value.',
    icon: Gift,
    cta: 'Claim $1 Card',
  },
  {
    step: '02',
    title: 'Back When We Launch',
    subtitle: '(The High-Risk Yes)',
    description:
      "Be ready on November xth to secure your full copy and access special limited tiers before they're gone.",
    icon: Rocket,
    cta: 'Set Reminder',
  },
  {
    step: '03',
    title: 'Receive and Connect',
    subtitle: '(The Success)',
    description:
      'Your copy of MaskOff is shipped after the campaign is successfully funded. Start winning authenticity.',
    icon: Package,
    cta: 'Learn More',
  },
];

export function ThePlan() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-24 px-4 relative bg-alt">
      <div className="max-w-6xl mx-auto">
        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="inline-flex items-center gap-2 bg-secondary/20 border border-secondary/50 rounded-full px-4 py-2 mb-8"
        >
          <MapPin className="h-4 w-4 text-secondary" />
          <span className="text-secondary text-sm font-semibold uppercase tracking-wide">
            The Roadmap
          </span>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-center"
        >
          <span className="text-foreground">3 STEPS TO WIN</span>{' '}
          <span className="text-primary">AUTHENTICITY</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-xl text-muted text-center mb-16 max-w-2xl mx-auto"
        >
          It's simple. We've removed all the friction so you can focus on what matters: connection.
        </motion.p>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              className="relative group"
            >
              {/* Step Number Badge */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="absolute -top-6 -left-6 w-20 h-20 bg-primary rounded-2xl flex items-center justify-center text-primary-foreground font-black text-2xl shadow-lg z-10 rotate-3"
              >
                {step.step}
              </motion.div>

              {/* Card */}
              <div className="relative bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-8 pt-16 hover:border-primary/50 transition-all duration-300 h-full group-hover:transform group-hover:-translate-y-2">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="text-primary mb-6"
                >
                  <step.icon className="h-12 w-12" />
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-foreground mb-2 leading-tight">
                  {step.title}
                </h3>

                {/* Subtitle */}
                <p className="text-sm text-primary/80 mb-4 font-semibold">{step.subtitle}</p>

                {/* Description */}
                <p className="text-muted mb-6 leading-relaxed">{step.description}</p>

                {/* CTA Button */}
                <Button
                  variant="outline"
                  className="w-full border-primary/30 text-primary hover:bg-primary/10 hover:border-primary transition-all"
                >
                  {step.cta}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* Connector Arrow (except for last item) */}
              {index < steps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.2 }}
                  className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20"
                >
                  <ArrowRight className="h-8 w-8 text-primary/50" />
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Timeline Visual */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="relative h-2 bg-primary rounded-full mb-16"
        >
          <div className="absolute inset-0 bg-primary blur-sm opacity-50" />
        </motion.div>
      </div>
    </section>
  );
}

export default ThePlan;
