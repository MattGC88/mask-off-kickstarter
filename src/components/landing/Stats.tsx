import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import Button from '../ui/button';
import { Layers, Clock, Zap, Shield, ArrowRight } from 'lucide-react';

const authorityPoints = [
  {
    icon: Layers,
    stat: '57 Cards, 10 Unique Powers',
    description: 'Simple design meets deep strategy. Every card is a decision that matters.',
  },
  {
    icon: Clock,
    stat: '10-Minute Rounds',
    description: 'Easy to start, impossible to stop. Perfect for any gathering length.',
  },
  {
    icon: Zap,
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
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight"
        >
          <span className="text-foreground">MEET YOUR GUIDE:</span>{' '}
          <span className="text-primary">MASKOFF IS THE CURE</span>
        </motion.h2>

        {/* Empathy Statement */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl text-muted mb-16 max-w-3xl leading-relaxed"
        >
          We understand the frustration of disconnection. That's why we didn't just create a game—we
          created a <span className="text-primary font-semibold">tool for authenticity</span>.
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden bg-secondary/20 p-8 backdrop-blur-sm border border-secondary/30">
              {/* Hero illustration placeholder */}
              <img
                src="/hero-illustration.svg"
                alt="MaskOff packaging and power card"
                className="w-full h-auto"
              />

              {/* Floating badge */}
              <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full font-bold shadow-xl text-sm">
                Premium Quality
              </div>
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
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="flex items-start gap-4 bg-card/60 border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300">
                  <div className="text-primary shrink-0 group-hover:scale-110 transition-transform">
                    <point.icon className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{point.stat}</h3>
                    <p className="text-muted">{point.description}</p>
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
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-12 py-7 rounded-xl shadow-lg hover:shadow-xl transition-all group"
          >
            BACK THIS PROJECT
            <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-2 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
