import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Button } from "./ui/button";
import { ArrowRight, Star } from "lucide-react";

export function CallToAction() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section ref={ref} className="py-24 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gray-700 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-gray-700 rounded-2xl p-12 text-center relative overflow-hidden"
        >
          {/* Decorative corner elements */}
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.5,
              }}
              className={`absolute w-24 h-24 border border-gray-600 rounded-lg ${
                i === 0
                  ? "top-4 left-4"
                  : i === 1
                  ? "top-4 right-4"
                  : i === 2
                  ? "bottom-4 left-4"
                  : "bottom-4 right-4"
              } opacity-20`}
            />
          ))}

          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-gray-700 rounded-full px-4 py-2 mb-6"
          >
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="text-gray-200">Limited Time Offer</span>
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-100 mb-4"
          >
            Be Part of Something Special
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Join thousands of backers in bringing this extraordinary deck to life.
            Early bird rewards are limited - secure your deck today!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-gray-100 text-gray-900 hover:bg-gray-200 rounded-lg group"
            >
              Pledge Now
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="ml-2 h-5 w-5" />
              </motion.div>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-600 text-gray-100 hover:bg-gray-800 rounded-lg"
            >
              View Rewards
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 text-gray-400"
          >
            <p>🎯 250+ Early Bird Spots Remaining</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="text-center mt-16 text-gray-500"
      >
        <p>© 2025 Card Game Project. All rights reserved.</p>
      </motion.div>
    </section>
  );
}
