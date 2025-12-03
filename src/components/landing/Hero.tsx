import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Users, Clock, ChevronDown } from 'lucide-react';
import { PlayingCard } from './PlayingCard';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.3]);

  return (
    <div ref={containerRef} className="relative min-h-screen bg-background">
      {/* Background Pattern - MaskOff pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/mask-pattern.svg')] bg-repeat" />
      </div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-20"
      >
        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-center mb-6 leading-tight max-w-6xl"
        >
          <span className="text-foreground">SMALL TALK IS</span>{' '}
          <span className="text-accent">KILLING</span>
          <br />
          <span className="text-foreground">YOUR</span>{' '}
          <span className="text-primary">FRIENDSHIPS</span>
        </motion.h1>

        {/* Impact Statement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, type: 'spring' }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-center mb-8 max-w-4xl"
        >
          <span className="text-foreground">TIME TO</span>{' '}
          <span className="text-primary">BURN THE MASKS.</span>
        </motion.div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-lg sm:text-xl md:text-2xl text-muted max-w-3xl mx-auto mb-12 text-center leading-relaxed px-4"
        >
          Stop wasting nights on surface-level conversations.{' '}
          <span className="text-foreground font-semibold">MaskOff breaks through the facade</span>{' '}
          and creates the{' '}
          <span className="text-primary font-semibold">real connections you've been missing</span>.
        </motion.p>

        {/* Playing Cards with Custom Illustrations */}
        <div className="relative w-full max-w-4xl h-64 sm:h-80 md:h-96 flex items-center justify-center mb-8">
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

        {/* Gameplay Snapshot */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mb-12 max-w-2xl mx-auto"
        >
          <div className="bg-card/80 backdrop-blur-sm border-2 border-primary/30 rounded-2xl p-6 sm:p-8">
            <div className="text-center">
              <p className="text-xl sm:text-2xl md:text-3xl font-black text-foreground mb-3 leading-tight">
                "What mask do you wear most often?"
              </p>
              <div className="flex items-center justify-center gap-2 text-sm sm:text-base text-muted">
                <span className="inline-block w-2 h-2 bg-primary rounded-full"></span>
                <span className="font-semibold">Actual card from the game</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Trust Signals & Urgency */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-xs sm:text-sm mb-12"
        >
          <div className="flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2">
            <Users className="h-4 w-4 text-primary" />
            <span className="text-foreground font-bold">
              <span className="text-primary">250+</span> backed in 72hrs
            </span>
          </div>
          <div className="flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-4 py-2">
            <Clock className="h-4 w-4 text-accent" />
            <span className="text-foreground font-bold">
              Campaign ends: <span className="text-accent">72 hours</span>
            </span>
          </div>
          <div className="flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-4 py-2">
            <ChevronDown className="h-4 w-4 text-accent" />
            <span className="text-foreground font-bold">
              <span className="text-accent">15+</span> successful playtests
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
