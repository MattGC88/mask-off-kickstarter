import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import Button from '../ui/button';
import { ArrowRight, TrendingDown, TrendingUp, Sparkles } from 'lucide-react';

const paths = [
  {
    type: 'without',
    title: 'Without MaskOff',
    gradient: 'from-destructive/20 via-destructive/10 to-transparent',
    borderColor: 'border-destructive/30',
    hoverBorder: 'hover:border-destructive/60',
    icon: TrendingDown,
    iconColor: 'text-destructive',
    points: [
      'Surface-level conversations that never go deeper',
      'Forgettable game nights with disconnected friends',
      'Frustration from failed attempts at real connection',
      'Wasted money on games gathering dust',
    ],
  },
  {
    type: 'with',
    title: 'With MaskOff',
    gradient: 'from-primary/20 via-primary/10 to-transparent',
    borderColor: 'border-primary/30',
    hoverBorder: 'hover:border-primary',
    icon: TrendingUp,
    iconColor: 'text-primary',
    points: [
      'Breakthrough moments of authentic connection',
      'Legendary game nights people talk about for weeks',
      'Deep bonds formed through honest conversations',
      'The one game everyone always wants to play',
    ],
  },
];

export function CallToAction() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-24 px-4 relative overflow-hidden bg-gradient-to-b from-background via-alt to-background">
      {/* Background Glow Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 0.3, scale: 1 } : {}}
          transition={{ duration: 1.5 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-3xl"
        />
      </div>

      <div ref={ref} className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-6 py-3 mb-8"
          >
            <Sparkles className="h-5 w-5 text-primary" />
            <span className="text-primary text-sm sm:text-base font-bold uppercase tracking-wider">
              The Moment of Truth
            </span>
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 leading-tight"
          >
            <span className="text-foreground">YOUR CHOICE</span>
            <br />
            <span className="text-primary">DEFINES YOUR FUTURE</span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl text-muted max-w-3xl mx-auto leading-relaxed"
          >
            Two paths lie ahead. One leads to more of the same.{' '}
            <span className="text-primary font-semibold">The other changes everything.</span>
          </motion.p>
        </div>

        {/* Comparison Cards */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 mb-20">
          {paths.map((path, pathIndex) => (
            <motion.div
              key={path.type}
              initial={{ opacity: 0, y: 40, rotateX: -10 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{
                delay: 0.3 + pathIndex * 0.15,
                duration: 0.6,
                type: 'spring',
                stiffness: 100,
              }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="relative group"
              style={{ perspective: '1000px' }}
            >
              {/* Glow Effect on Hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${path.gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`}
              />

              {/* Card */}
              <div
                className={`relative bg-card/80 backdrop-blur-xl border-2 ${path.borderColor} ${path.hoverBorder} rounded-3xl p-6 sm:p-8 md:p-10 transition-all duration-500 h-full flex flex-col`}
              >
                {/* Icon Header */}
                <div className="flex items-center gap-4 mb-8">
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${path.gradient} border ${path.borderColor} flex items-center justify-center`}
                  >
                    <path.icon
                      className={`w-8 h-8 sm:w-10 sm:h-10 ${path.iconColor}`}
                      strokeWidth={2.5}
                    />
                  </motion.div>
                  <div>
                    <h3
                      className={`text-2xl sm:text-3xl md:text-4xl font-black ${path.type === 'with' ? 'text-primary' : 'text-destructive'}`}
                    >
                      {path.title}
                    </h3>
                  </div>
                </div>

                {/* Points List */}
                <ul className="space-y-4 sm:space-y-5 flex-1 mb-8">
                  {path.points.map((point, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: pathIndex === 0 ? -20 : 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="flex items-start gap-3 sm:gap-4"
                    >
                      {/* Bullet Point */}
                      <div
                        className={`mt-1 w-2 h-2 rounded-full ${path.type === 'with' ? 'bg-primary' : 'bg-destructive'} shrink-0`}
                      />
                      <span
                        className={`text-sm sm:text-base md:text-lg leading-relaxed ${path.type === 'with' ? 'text-foreground font-medium' : 'text-muted'}`}
                      >
                        {point}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                {/* Bottom Indicator */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.8 + pathIndex * 0.1 }}
                  className={`relative overflow-hidden rounded-xl p-4 border ${path.borderColor} bg-gradient-to-br ${path.gradient}`}
                >
                  <p
                    className={`text-center font-bold text-sm sm:text-base ${path.type === 'with' ? 'text-primary' : 'text-destructive'}`}
                  >
                    {path.type === 'with'
                      ? 'Transform Your Gatherings Forever'
                      : 'More Of The Same Old Story'}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Final CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
          className="text-center"
        >
          {/* Pre-CTA Text */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 1.1 }}
            className="mb-10"
          >
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 leading-tight">
              <span className="text-foreground">Stop settling for surface-level.</span>
              <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Choose authenticity.
              </span>
            </p>
          </motion.div>

          {/* Main CTA Button */}
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="mb-8">
            <a
              href="https://www.backerkit.com/call_to_action/76df4bd8-01ac-412d-b684-39c90284624b/landing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="relative bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl px-10 py-7 sm:px-14 sm:py-8 md:px-20 md:py-10 lg:px-24 lg:py-12 rounded-2xl shadow-2xl hover:shadow-primary/50 transition-all duration-500 group overflow-hidden"
              >
                {/* Button Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <span className="relative flex items-center gap-3 sm:gap-4 md:gap-5">
                  <span className="font-black tracking-tight">BACK THIS PROJECT NOW</span>
                  <motion.div
                    animate={{ x: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <ArrowRight className="h-7 w-7 sm:h-9 sm:w-9 md:h-11 md:w-11" strokeWidth={3} />
                  </motion.div>
                </span>
              </Button>
            </a>
          </motion.div>

          {/* Urgency Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1.3 }}
            className="inline-flex items-center gap-2 bg-destructive/10 border border-destructive/30 rounded-full px-6 py-3"
          >
            <div className="w-2 h-2 bg-destructive rounded-full animate-pulse" />
            <span className="text-sm sm:text-base font-semibold text-foreground">
              <span className="text-destructive">Limited Time:</span> Campaign Ends in 72 Hours
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="text-center mt-24 text-muted text-xs sm:text-sm border-t border-border/50 pt-12 max-w-4xl mx-auto"
      >
        <p className="mb-2">© 2025 MaskOff Card Game. All rights reserved.</p>
        <p className="text-muted/60">Powered by BackerKit</p>
      </motion.div>
    </section>
  );
}
