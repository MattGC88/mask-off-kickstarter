import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { MessageSquare, Star, CheckCircle, Quote } from 'lucide-react';

const testimonials = [
  {
    quote:
      "My game nights were never the same. This instantly became the easiest way to get everyone laughing and genuinely talking. I'm officially the best host!",
    author: 'Javier P.',
    role: 'Game Host',
    avatar: '🎭',
  },
  {
    quote:
      'I thought it was another simple game, but the 10 power cards turn it into social chess. Fast, addictive, and it genuinely makes you look at your friends differently.',
    author: 'Sofia V.',
    role: 'Game Designer',
    avatar: '🎨',
  },
  {
    quote:
      'Finally, a game my teens put their phones down for. The honesty and fun are exactly what we needed.',
    author: 'Mark R.',
    role: 'Family Gamer',
    avatar: '👨‍👩‍👧‍👦',
  },
];

const stats = [
  { value: '250+', label: 'Backers' },
  { value: '4.9/5', label: 'Rating' },
  { value: '98%', label: 'Satisfaction' },
  { value: '72h', label: 'Left' },
];

export function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-24 px-4 relative bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-4 py-2 mb-8 mx-auto block w-fit"
        >
          <MessageSquare className="h-4 w-4 text-accent" />
          <span className="text-accent text-sm font-semibold uppercase tracking-wide">
            Real Feedback
          </span>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-center"
        >
          <span className="text-foreground">WHAT PEOPLE ARE</span>{' '}
          <span className="text-primary">SAYING</span>
          ...
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-xl text-muted text-center mb-16 max-w-2xl mx-auto"
        >
          Don't just take our word for it. Here's what early players are experiencing.
        </motion.p>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 h-full flex flex-col">
                {/* Quote Icon */}
                <div className="text-primary/30 mb-4">
                  <Quote className="h-12 w-12" />
                </div>

                {/* Testimonial Text */}
                <p className="text-muted mb-6 leading-relaxed flex-grow italic">
                  "{testimonial.quote}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-2xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="text-foreground font-bold">{testimonial.author}</p>
                    <p className="text-muted text-sm">{testimonial.role}</p>
                  </div>
                </div>

                {/* Star Rating */}
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.5 + i * 0.1 }}
                    >
                      <Star className="h-5 w-5 fill-primary text-primary" />
                    </motion.div>
                  ))}
                </div>

                {/* Verified Badge */}
                <div className="absolute top-4 right-4 bg-accent/20 border border-accent/50 rounded-full px-3 py-1 flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-accent" />
                  <span className="text-accent text-xs font-semibold">Verified</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="bg-primary/10 border border-primary/30 rounded-2xl p-8 backdrop-blur-sm"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl md:text-5xl font-black text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted text-sm font-semibold uppercase tracking-wide">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Gallery;
