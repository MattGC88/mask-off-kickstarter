import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

const galleryItems = [
  { id: 1, height: 'h-64' },
  { id: 2, height: 'h-80' },
  { id: 3, height: 'h-72' },
  { id: 4, height: 'h-64' },
  { id: 5, height: 'h-80' },
  { id: 6, height: 'h-72' },
];

// Pre-generated random rotations for hover effects
const hoverRotations = [1.5, -1.2, 0.8, -1.8, 1.3, -0.9];

export function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-gray-100 mb-4">Card Showcase</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore the intricate details and stunning artwork
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotate: hoverRotations[index] }}
              className={`${item.height} bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700 overflow-hidden relative group cursor-pointer`}
            >
              {/* Decorative content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  className="w-32 h-32 border-2 border-gray-600 rounded-lg opacity-20"
                />
              </div>

              {/* Overlay on hover */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent flex items-end justify-center pb-6"
              >
                <span className="text-gray-200">View Details</span>
              </motion.div>

              {/* Shimmer effect */}
              <motion.div
                animate={{
                  x: ['-100%', '200%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.5,
                  ease: 'linear',
                }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
