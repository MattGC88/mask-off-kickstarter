import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Moon, Frown, Puzzle } from 'lucide-react';
import { CardMasonry } from '../ui/CardMasonry';

const painPoints = [
  {
    icon: Moon,
    title: 'Instant Depth',
    description: 'Go from "How\'s work?" to "What\'s your biggest fear?" in 60 seconds flat.',
    benefit: 'Real conversations, immediately',
    before: 'Surface small talk',
    after: 'Profound connections',
    bgColor: 'bg-alt',
    accentColor: 'bg-primary',
    iconColor: 'text-primary',
    textColor: 'text-foreground',
    size: 'large', // Bento box sizing
  },
  {
    icon: Frown,
    title: 'Group Magnet',
    description:
      'The game everyone requests. Watch your gatherings transform into legendary nights.',
    benefit: 'Become the host everyone loves',
    metric: '98% request replay',
    bgColor: 'bg-background',
    accentColor: 'bg-secondary',
    iconColor: 'text-secondary',
    textColor: 'text-foreground',
    size: 'medium',
  },
  {
    icon: Puzzle,
    title: 'Simple But Deep',
    description:
      'Learn in 60 seconds. Master over months. 10 power cards turn simple into strategic.',
    benefit: 'Easy to start, impossible to master',
    metric: 'Avg session: 3.5hrs',
    bgColor: 'bg-alt',
    accentColor: 'bg-primary',
    iconColor: 'text-primary',
    textColor: 'text-foreground',
    size: 'small',
  },
];

export function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-24 px-4 relative bg-alt">
      {/* Background - MaskOff brand pattern */}
      <div className="absolute inset-0 opacity-[0.08]">
        <img src="/images/maskoff-pattern.png" alt="" className="w-full h-full object-cover" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="inline-flex items-center gap-2 bg-secondary/20 border border-secondary/50 rounded-full px-4 py-2 mb-8"
        >
          <span className="text-secondary text-sm font-semibold uppercase tracking-wide">
            The Villain
          </span>
        </motion.div>

        {/* Title */}
        <div className="mb-8 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.8 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ type: 'spring', stiffness: 100, damping: 15 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black mb-3 leading-tight"
          >
            <span className="text-foreground">STOP THE SAME</span>{' '}
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ type: 'spring', stiffness: 200, damping: 10, delay: 0.3 }}
              className="text-muted line-through decoration-primary decoration-[3px] sm:decoration-[4px] md:decoration-[5px] lg:decoration-[6px]"
            >
              BORING
            </motion.span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.8 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ type: 'spring', stiffness: 100, damping: 15, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black leading-tight"
          >
            <span className="text-foreground">CONVERSATIONS.</span>
          </motion.div>
        </div>

        {/* Problem Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: 'spring', stiffness: 80, delay: 0.5 }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-muted mb-16 max-w-4xl leading-relaxed font-bold"
        >
          Every gathering feels <span className="text-secondary font-black italic">empty</span>.
          Every conversation stays <span className="text-secondary font-black italic">shallow</span>
          . Everyone wears{' '}
          <motion.span
            initial={{ scale: 1 }}
            animate={isInView ? { scale: [1, 1.15, 1] } : {}}
            transition={{ duration: 0.6, delay: 1.2, repeat: Infinity, repeatDelay: 4 }}
            className="text-secondary font-black text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl"
          >
            masks
          </motion.span>
          .{' '}
          <span className="text-primary font-black text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
            MaskOff removes them
          </span>
          —naturally.
        </motion.p>

        {/* Bento Box Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {painPoints.map((pain, index) => {
            // Bento box responsive layout
            const gridSpan =
              pain.size === 'large'
                ? 'md:col-span-7'
                : pain.size === 'medium'
                  ? 'md:col-span-5'
                  : 'md:col-span-12';

            const heightClass =
              pain.size === 'large'
                ? 'md:min-h-[400px]'
                : pain.size === 'medium'
                  ? 'md:min-h-[400px]'
                  : 'md:min-h-[280px]';

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{
                  delay: index * 0.2,
                  type: 'spring',
                  stiffness: 100,
                }}
                whileHover={{
                  y: -10,
                  rotateX: 5,
                  rotateY: 5,
                  transition: { duration: 0.3 },
                }}
                className={`${gridSpan} ${heightClass} group relative`}
                style={{ perspective: '1000px' }}
              >
                {/* 3D Card Container */}
                <div
                  className={`relative h-full ${pain.bgColor} border-2 border-border rounded-3xl p-8 overflow-hidden transition-all duration-300 group-hover:border-primary group-hover:shadow-2xl`}
                >
                  {/* Corner accent stripe */}
                  <div
                    className={`absolute top-0 right-0 w-2 h-32 ${pain.accentColor} transition-all duration-300 group-hover:h-48`}
                  />
                  <div
                    className={`absolute top-0 right-0 h-2 w-32 ${pain.accentColor} transition-all duration-300 group-hover:w-48`}
                  />

                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col justify-between">
                    {/* Icon - static, no animation */}
                    <div className={`${pain.iconColor} mb-6`}>
                      <pain.icon className="w-16 h-16 md:w-20 md:h-20" strokeWidth={2} />
                    </div>

                    {/* Title */}
                    <div>
                      <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{
                          type: 'spring',
                          stiffness: 120,
                          delay: 0.8 + index * 0.2,
                        }}
                        className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-4 leading-tight"
                      >
                        {pain.title}
                      </motion.h3>

                      {/* Description */}
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: 1 + index * 0.2 }}
                        className="text-muted text-lg md:text-xl leading-relaxed font-medium mb-4"
                      >
                        {pain.description}
                      </motion.p>

                      {/* Benefit Badge */}
                      {pain.benefit && (
                        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-2">
                          <span className="text-primary text-sm font-bold">{pain.benefit}</span>
                        </div>
                      )}

                      {/* Metric */}
                      {pain.metric && (
                        <div className="text-accent text-sm font-black mt-2">📊 {pain.metric}</div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Card Masonry Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: 'spring', stiffness: 80, delay: 1.2 }}
          className="mt-24"
        >
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ type: 'spring', stiffness: 100, delay: 1.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-12 text-center"
          >
            <span className="text-primary">SIMPLE.</span> VISUAL.{' '}
            <span className="text-primary">POWERFUL.</span>
          </motion.h3>
          <CardMasonry autoScroll={true} scrollSpeed={0.5} />
        </motion.div>
      </div>
    </section>
  );
}

export default Features;
