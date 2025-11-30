import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Instagram, MessageSquare, Users } from 'lucide-react';

const ugcContent = [
  {
    type: 'photo',
    src: '/images/masktable.png', // Using existing product image as placeholder
    caption: 'Game night level: LEGENDARY 🔥',
    author: '@maskoff_players',
    platform: 'instagram'
  },
  {
    type: 'photo',
    src: '/illustrations/bamileke-card.png',
    caption: 'The artwork on these cards is INSANE',
    author: '@card_collector',
    platform: 'instagram'
  },
  {
    type: 'photo',
    src: '/illustrations/tlaloc-card.png',
    caption: 'This question changed everything 💯',
    author: '@deep_convos',
    platform: 'instagram'
  },
  {
    type: 'photo',
    src: '/illustrations/maori-card.png',
    caption: 'Most authentic game I\'ve ever played',
    author: '@boardgame_nights',
    platform: 'instagram'
  },
  {
    type: 'photo',
    src: '/illustrations/kawakwaka-card.png',
    caption: 'My friends can\'t stop requesting this',
    author: '@party_host_pro',
    platform: 'instagram'
  },
  {
    type: 'photo',
    src: '/illustrations/elvise-card.png',
    caption: 'The power cards are GENIUS 🎯',
    author: '@strategy_games',
    platform: 'instagram'
  },
  {
    type: 'photo',
    src: '/illustrations/vuvi-card.png',
    caption: 'Finally, real conversations',
    author: '@authentic_living',
    platform: 'instagram'
  },
  {
    type: 'photo',
    src: '/illustrations/bamana-card.png',
    caption: 'Cultural masks + deep questions = 💎',
    author: '@game_design_fan',
    platform: 'instagram'
  },
];

export function SocialWall() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-24 px-4 relative bg-alt overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.05]">
        <img src="/images/maskoff-pattern.png" alt="" className="w-full h-full object-cover" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-4 py-2 mb-8"
        >
          <MessageSquare className="h-4 w-4 text-accent" />
          <span className="text-accent text-sm font-semibold uppercase tracking-wide">
            Community Love
          </span>
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4">
            <span className="text-foreground">REAL MOMENTS.</span>{' '}
            <span className="text-primary">REAL CONNECTIONS.</span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-muted max-w-3xl mx-auto">
            See how people are already transforming their gatherings
          </p>
        </motion.div>

        {/* Masonry grid of UGC */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
          {ugcContent.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.1 + index * 0.05 }}
              className="relative group cursor-pointer"
            >
              <div className="relative aspect-square rounded-xl overflow-hidden bg-card border-2 border-border hover:border-primary transition-all duration-300 shadow-lg hover:shadow-2xl">
                {/* Image */}
                <img
                  src={item.src}
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end">
                  <p className="text-white text-sm sm:text-base mb-2 font-semibold leading-snug">
                    {item.caption}
                  </p>
                  <div className="flex items-center gap-2 text-white/80 text-xs sm:text-sm">
                    <Instagram className="w-4 h-4" />
                    <span className="font-medium">{item.author}</span>
                  </div>
                </div>

                {/* Platform badge (always visible) */}
                <div className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Instagram className="w-4 h-4 text-primary" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA to share */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-3 bg-primary/10 border-2 border-primary/30 rounded-2xl px-6 py-4">
            <Users className="w-6 h-6 text-primary" />
            <p className="text-base sm:text-lg text-foreground font-bold">
              Join the movement:{' '}
              <span className="text-primary font-black text-lg sm:text-xl">#MaskOffGame</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default SocialWall;
