import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { MessageSquare, Users } from 'lucide-react';
import { InstagramEmbed } from 'react-social-media-embed';

// Add real Instagram post URLs from @maskoffgame here
const instagramPosts = [
  'https://www.instagram.com/p/DO3t2WzkctC/',
  'https://www.instagram.com/p/DLEFLANJ0Px/',
  'https://www.instagram.com/p/DHBx2r5JQf6/?img_index=1',
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

        {/* Instagram Feed Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 max-w-5xl mx-auto">
          {instagramPosts.map((url, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.1 + index * 0.05 }}
              className="relative group"
            >
              <div className="instagram-card-wrapper">
                <InstagramEmbed
                  url={url}
                  width="100%"
                  captioned={false}
                  placeholderImageUrl="/images/masktable.png"
                  placeholderSpinner={
                    <div className="flex items-center justify-center h-full min-h-[400px]">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                    </div>
                  }
                />
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
          <div className="inline-flex items-center gap-3 bg-primary/10 border-2 border-primary/30 rounded-2xl px-6 py-4 mb-6">
            <Users className="w-6 h-6 text-primary" />
            <p className="text-base sm:text-lg text-foreground font-bold">
              Join the movement:{' '}
              <span className="text-primary font-black text-lg sm:text-xl">#MaskOffGame</span>
            </p>
          </div>
        </motion.div>
      </div>

      {/* Custom CSS to clean up Instagram embeds */}
      <style>{`
        .instagram-card-wrapper {
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          transition: all 0.3s ease;
        }

        .instagram-card-wrapper:hover {
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          transform: translateY(-4px);
        }

        .instagram-card-wrapper iframe {
          border: none !important;
          border-radius: 12px !important;
        }
      `}</style>
    </section>
  );
}

export default SocialWall;
