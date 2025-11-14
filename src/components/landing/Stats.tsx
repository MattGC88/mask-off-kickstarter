import { motion, useInView, useMotionValue, useSpring } from 'motion/react';
import { useRef, useEffect } from 'react';

interface StatProps {
  end: number;
  label: string;
  prefix?: string;
  suffix?: string;
  delay: number;
}

function AnimatedStat({ end, label, prefix = '', suffix = '', delay }: StatProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2000 });
  const displayValue = useMotionValue(0);

  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        motionValue.set(end);
      }, delay);
    }
  }, [isInView, end, delay, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      displayValue.set(Math.round(latest));
    });
    return unsubscribe;
  }, [springValue, displayValue]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: delay / 1000 }}
      className="text-center"
    >
      <motion.div className="text-gray-100 mb-2">
        {prefix}
        <motion.span>{displayValue}</motion.span>
        {suffix}
      </motion.div>
      <p className="text-gray-400">{label}</p>
    </motion.div>
  );
}

export function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section ref={ref} className="py-24 px-4 relative overflow-hidden">
      {/* Animated background grid */}
      <motion.div
        animate={isInView ? { opacity: [0.05, 0.1, 0.05] } : {}}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute inset-0"
      >
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(rgba(156, 163, 175, 0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(156, 163, 175, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-2xl p-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
            <AnimatedStat end={2500} suffix="+" label="Backers" delay={200} />
            <AnimatedStat end={125} suffix="K" prefix="$" label="Funded" delay={400} />
            <AnimatedStat end={98} suffix="%" label="Satisfaction" delay={600} />
            <AnimatedStat end={14} label="Days Left" delay={800} />
          </div>
        </div>
      </div>
    </section>
  );
}
