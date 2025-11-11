import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { PlayingCard } from "./PlayingCard";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);

  return (
    <div ref={containerRef} className="relative h-screen overflow-hidden">
      <motion.div
        style={{ y, opacity }}
        className="flex flex-col items-center justify-center h-full px-4"
      >
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-12 z-10"
        >
          <motion.h1
            className="text-gray-100 mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            The Ultimate Card Game Experience
          </motion.h1>
          <motion.p
            className="text-gray-400 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            A revolutionary deck of premium playing cards featuring stunning artwork,
            superior quality, and innovative design. Support us on Kickstarter.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-gray-100 text-gray-900 hover:bg-gray-200 rounded-lg"
            >
              Back This Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-600 text-gray-100 hover:bg-gray-800 rounded-lg"
            >
              Watch Video
            </Button>
          </motion.div>
        </motion.div>

        {/* Cards Section */}
        <div className="relative w-full max-w-4xl h-96 flex items-center justify-center">
          <PlayingCard
            delay={0.2}
            rotation={-15}
            xOffset={-200}
            scrollProgress={scrollYProgress}
            cardNumber={1}
          />
          <PlayingCard
            delay={0.4}
            rotation={0}
            xOffset={0}
            scrollProgress={scrollYProgress}
            cardNumber={2}
          />
          <PlayingCard
            delay={0.6}
            rotation={15}
            xOffset={200}
            scrollProgress={scrollYProgress}
            cardNumber={3}
          />
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-gray-500 text-sm">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-6 h-10 border-2 border-gray-600 rounded-full p-1"
            >
              <div className="w-1.5 h-2 bg-gray-500 rounded-full mx-auto" />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
