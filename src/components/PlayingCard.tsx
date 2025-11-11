import { motion, useTransform, MotionValue } from "motion/react";

interface PlayingCardProps {
  delay: number;
  rotation: number;
  xOffset: number;
  scrollProgress: MotionValue<number>;
  cardNumber: number;
}

export function PlayingCard({
  delay,
  rotation,
  xOffset,
  scrollProgress,
  cardNumber,
}: PlayingCardProps) {
  // Scroll-based transformations
  const scrollRotation = useTransform(
    scrollProgress,
    [0, 0.5],
    [rotation, rotation + (cardNumber - 2) * 20]
  );
  const scrollY = useTransform(scrollProgress, [0, 0.5], [0, cardNumber * 50]);
  const scrollScale = useTransform(scrollProgress, [0, 0.5], [1, 0.8]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 100, rotateY: -90 }}
      animate={{ opacity: 1, y: 0, rotateY: 0 }}
      transition={{
        duration: 0.8,
        delay,
        type: "spring",
        stiffness: 100,
      }}
      style={{
        rotate: scrollRotation,
        y: scrollY,
        scale: scrollScale,
        x: xOffset,
      }}
      className="absolute w-64 h-96 rounded-xl shadow-2xl"
      whileHover={{
        scale: 1.05,
        rotate: 0,
        transition: { duration: 0.3 },
      }}
    >
      {/* Card Front */}
      <div className="relative w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border-2 border-gray-700 overflow-hidden">
        {/* Decorative Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-400 to-transparent" />
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <pattern
              id={`pattern-${cardNumber}`}
              x="0"
              y="0"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="20" cy="20" r="1" fill="white" />
            </pattern>
            <rect width="100%" height="100%" fill={`url(#pattern-${cardNumber})`} />
          </svg>
        </div>

        {/* Card Content */}
        <div className="relative h-full flex flex-col items-center justify-center p-6">
          {/* Top Corner */}
          <div className="absolute top-4 left-4">
            <div className="text-gray-200">
              {cardNumber === 1 && "A"}
              {cardNumber === 2 && "K"}
              {cardNumber === 3 && "Q"}
            </div>
            <div className="text-gray-400 text-xs mt-1">
              {cardNumber === 1 && "♠"}
              {cardNumber === 2 && "♥"}
              {cardNumber === 3 && "♣"}
            </div>
          </div>

          {/* Center Symbol */}
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: cardNumber * 0.3,
            }}
            className="text-gray-300"
          >
            {cardNumber === 1 && (
              <svg width="120" height="120" viewBox="0 0 120 120" fill="currentColor">
                <path d="M60,20 L70,50 L100,50 L75,70 L85,100 L60,80 L35,100 L45,70 L20,50 L50,50 Z" />
              </svg>
            )}
            {cardNumber === 2 && (
              <svg width="120" height="120" viewBox="0 0 120 120" fill="currentColor">
                <path d="M60,30 C60,30 40,45 40,65 C40,85 50,95 60,100 C70,95 80,85 80,65 C80,45 60,30 60,30 Z" />
              </svg>
            )}
            {cardNumber === 3 && (
              <svg width="120" height="120" viewBox="0 0 120 120" fill="currentColor">
                <path d="M60,100 L35,85 L35,55 L60,40 L85,55 L85,85 Z" />
              </svg>
            )}
          </motion.div>

          {/* Bottom Corner (mirrored) */}
          <div className="absolute bottom-4 right-4 rotate-180">
            <div className="text-gray-200">
              {cardNumber === 1 && "A"}
              {cardNumber === 2 && "K"}
              {cardNumber === 3 && "Q"}
            </div>
            <div className="text-gray-400 text-xs mt-1">
              {cardNumber === 1 && "♠"}
              {cardNumber === 2 && "♥"}
              {cardNumber === 3 && "♣"}
            </div>
          </div>
        </div>

        {/* Shine Effect */}
        <motion.div
          animate={{
            x: ["-100%", "200%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: cardNumber,
            ease: "linear",
          }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
        />
      </div>
    </motion.div>
  );
}
