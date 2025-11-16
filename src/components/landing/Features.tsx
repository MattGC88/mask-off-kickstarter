import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { AlertTriangle } from 'lucide-react';

const painPoints = [
  {
    icon: '😴',
    title: 'Forgettable Nights',
    description:
      'Another gathering that feels like work instead of fun. You leave wondering why you bothered.',
  },
  {
    icon: '😰',
    title: 'Connection Anxiety',
    description:
      'The internal frustration and anxiety from failing to achieve authentic connections with your friends.',
  },
  {
    icon: '🎲',
    title: 'Complicated Games',
    description:
      "The fear of bringing yet another game that's too complex to teach, killing the mood before it starts.",
  },
];

export function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-24 px-4 relative overflow-hidden bg-alt">
      {/* Background - Masked figures pattern */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute inset-0 bg-[url('/masked-figures.svg')] bg-repeat" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="inline-flex items-center gap-2 bg-destructive/10 border border-destructive/30 rounded-full px-4 py-2 mb-8"
        >
          <span className="text-destructive text-sm font-semibold uppercase tracking-wide">
            The Villain
          </span>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight"
        >
          <span className="text-foreground">STOP THE SAME</span>{' '}
          <span className="text-muted line-through decoration-destructive decoration-4">
            BORING
          </span>
          <br />
          <span className="text-foreground">CONVERSATIONS.</span>
        </motion.h2>

        {/* Problem Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl text-muted mb-12 max-w-3xl leading-relaxed"
        >
          Are you tired of{' '}
          <span className="text-destructive font-semibold">trivial small talk</span>, awkward
          silences, or that frustrating feeling that everyone is wearing a{' '}
          <span className="text-foreground-muted font-semibold italic">social mask</span>? You spend
          time and money organizing gatherings only for them to stay on the surface.
        </motion.p>

        {/* Pain Points Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {painPoints.map((pain, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group relative"
            >
              <div className="relative bg-card/60 backdrop-blur-sm border border-border rounded-xl p-8 hover:border-primary/50 transition-all duration-300">
                <div className="text-5xl mb-4">{pain.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-3">{pain.title}</h3>
                <p className="text-muted leading-relaxed">{pain.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* The Real Cost */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          className="bg-destructive/10 border border-destructive/30 rounded-2xl p-8 backdrop-blur-sm"
        >
          <h3 className="text-2xl font-bold text-destructive mb-4 flex items-center gap-3">
            <AlertTriangle className="h-6 w-6" />
            The Real Cost
          </h3>
          <p className="text-foreground text-lg leading-relaxed">
            Every boring game night is a missed opportunity. Every surface-level conversation is a
            relationship that could have been deeper. Every complicated rulebook is energy wasted
            that could have been spent{' '}
            <span className="text-primary font-semibold">actually connecting</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Features;
