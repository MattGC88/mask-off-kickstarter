import { motion, useInView, useSpring, useTransform } from 'motion/react';
import { useEffect, useRef } from 'react';

interface CountUpProps {
  value: number;
  duration?: number;
  suffix?: string;
  className?: string;
}

export function CountUp({ value, suffix = '', className = '' }: CountUpProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const spring = useSpring(0, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const display = useTransform(spring, (current) => Math.round(current).toLocaleString());

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, spring, value]);

  return (
    <span ref={ref} className={className}>
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  );
}

export default CountUp;
