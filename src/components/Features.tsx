import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Sparkles, Shield, Package, Users } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Premium Quality",
    description: "Crafted with the finest materials for exceptional durability and feel",
  },
  {
    icon: Shield,
    title: "Unique Design",
    description: "Original artwork on every card, created by award-winning artists",
  },
  {
    icon: Package,
    title: "Limited Edition",
    description: "Exclusive production run with numbered collector's boxes",
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Designed with input from professional players and enthusiasts",
  },
];

export function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-24 px-4 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-gray-800/20 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gray-700/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-gray-100 mb-4">Why Back This Project?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Every detail has been carefully considered to create the perfect deck
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-gray-600 transition-colors"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center mb-4"
              >
                <feature.icon className="w-6 h-6 text-gray-200" />
              </motion.div>
              <h3 className="text-gray-100 mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
