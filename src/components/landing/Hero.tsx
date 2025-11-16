import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import Button from '../ui/button';
import { ArrowRight, Users, Clock, ChevronDown } from 'lucide-react';
import { PlayingCard } from './PlayingCard';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.3]);

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-hidden bg-background">
      {/* Background Pattern - MaskOff pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/mask-pattern.svg')] bg-repeat" />
      </div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-20"
      >
        {/* Badge: Live on BackerKit */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm border border-primary/30 rounded-full px-6 py-3 mb-8"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
          </span>
          <span className="text-primary font-semibold uppercase tracking-wide text-sm">
            Live on BackerKit • 250+ Backers
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-center mb-6 leading-tight max-w-6xl"
        >
          <span className="text-foreground">DITCH THE</span>{' '}
          <span className="text-primary">MASKS</span>
          <br />
          <span className="text-foreground">WIN THE</span>{' '}
          <span className="text-primary">TRUTH</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-lg sm:text-xl md:text-2xl text-muted max-w-3xl mx-auto mb-12 text-center leading-relaxed px-4"
        >
          The fast-paced card game that{' '}
          <span className="text-foreground font-semibold">forces your friends</span> to know each
          other better by <span className="text-primary font-semibold">demanding authenticity</span>
          .
        </motion.p>

        {/* Playing Cards with Custom Illustrations */}
        <div className="relative w-full max-w-4xl h-96 flex items-center justify-center mb-12">
          <PlayingCard
            delay={0.2}
            rotation={-15}
            xOffset={-200}
            scrollProgress={scrollYProgress}
            cardNumber={1}
            illustration="/illustrations/card-1.svg"
            title="Connection"
          />
          <PlayingCard
            delay={0.4}
            rotation={0}
            xOffset={0}
            scrollProgress={scrollYProgress}
            cardNumber={2}
            illustration="/illustrations/card-2.svg"
            title="Authenticity"
          />
          <PlayingCard
            delay={0.6}
            rotation={15}
            xOffset={200}
            scrollProgress={scrollYProgress}
            cardNumber={3}
            illustration="/illustrations/card-3.svg"
            title="Truth"
          />
        </div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 mb-8"
        >
          {/* Primary CTA */}
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-10 py-7 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <span className="flex items-center gap-2">
              BACK THIS PROJECT
              <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
            </span>
          </Button>

          {/* Secondary CTA - $1 Expansion */}
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-primary text-primary hover:bg-primary/10 text-lg px-10 py-7 rounded-xl group"
          >
            🎁 Get Early Access for $1
          </Button>
        </motion.div>

        {/* Urgency Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex flex-col sm:flex-row items-center gap-4 text-muted text-sm mb-12"
        >
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-primary" />
            <span>
              <span className="text-primary font-semibold">250+ backers</span> already supported
            </span>
          </div>
          <span className="hidden sm:block">•</span>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-primary" />
            <span>
              <span className="text-primary font-semibold">72 hours</span> left
            </span>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-muted text-xs uppercase tracking-wider">Scroll to discover</span>
            <ChevronDown className="h-6 w-6 text-muted" />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
