import { motion, useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { MessageSquare, Star, CheckCircle, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    quote:
      "My game nights were never the same. This instantly became the easiest way to get everyone laughing and genuinely talking. I'm officially the best host!",
    author: 'Javier P.',
    role: 'Game Host',
    maskImage: '/images/bamileke-mask.svg',
  },
  {
    quote:
      'I thought it was another simple game, but the 10 power cards turn it into social chess. Fast, addictive, and it genuinely makes you look at your friends differently.',
    author: 'Sofia V.',
    role: 'Game Designer',
    maskImage: '/images/maori-mask.svg',
  },
  {
    quote:
      'Finally, a game my teens put their phones down for. The honesty and fun are exactly what we needed.',
    author: 'Mark R.',
    role: 'Family Gamer',
    maskImage: '/images/tlaloc-mask.svg',
  },
  {
    quote:
      'This game is WILD! We played for 3 hours straight and nobody wanted to stop. The perfect mix of strategy and chaos.',
    author: 'Emma L.',
    role: 'Competitive Player',
    maskImage: '/images/elvisi-mask.svg',
  },
  {
    quote:
      'As a therapist, I love how this game naturally opens up conversations. It creates a safe space for vulnerability and authentic connection.',
    author: 'Dr. Chen',
    role: 'Clinical Psychologist',
    maskImage: '/images/vuvi-mask.svg',
  },
  {
    quote:
      'Simple rules, endless depth. My gaming group has been searching for something like this for years. The cultural masks are a beautiful touch too.',
    author: 'Marcus T.',
    role: 'Board Game Enthusiast',
    maskImage: '/images/bamana-mask.svg',
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
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section ref={ref} className="py-24 px-4 relative bg-background overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-4 py-2 mb-8 mx-auto w-fit"
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
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-6 text-center"
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
          className="text-base sm:text-lg md:text-xl text-muted text-center mb-16 max-w-2xl mx-auto"
        >
          Don't just take our word for it. Here's what early players are experiencing.
        </motion.p>

        {/* Carousel Container */}
        <div className="relative mb-12">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-16 md:h-16 bg-primary hover:bg-primary/90 text-background rounded-full flex items-center justify-center shadow-2xl transition-all hover:scale-110 -translate-x-4 md:-translate-x-8"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" strokeWidth={3} />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-16 md:h-16 bg-primary hover:bg-primary/90 text-background rounded-full flex items-center justify-center shadow-2xl transition-all hover:scale-110 translate-x-4 md:translate-x-8"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 md:w-8 md:h-8" strokeWidth={3} />
          </button>

          {/* Carousel Track */}
          <div className="overflow-hidden px-4 md:px-16">
            <div className="flex justify-center">
              <motion.div
                className="flex"
                style={{ width: '100%' }}
                animate={{
                  x: `-${currentIndex * 100}%`,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 30,
                }}
              >
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    className="w-full flex-shrink-0 flex justify-center items-center px-2"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={
                      isInView
                        ? {
                            opacity: currentIndex === index ? 1 : 0.4,
                            scale: currentIndex === index ? 1 : 0.85,
                          }
                        : {}
                    }
                    transition={{ duration: 0.5 }}
                  >
                    {/* Card */}
                    <div className="relative bg-card border-2 border-border rounded-3xl p-6 md:p-10 max-w-3xl w-full hover:border-primary transition-all duration-300">
                      {/* Quote Icon */}
                      <div className="text-primary/30 mb-4">
                        <Quote className="h-12 w-12 md:h-16 md:w-16" />
                      </div>

                      {/* Testimonial Text */}
                      <p className="text-muted text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-6 leading-relaxed font-bold italic">
                        "{testimonial.quote}"
                      </p>

                      {/* Author Info */}
                      <div className="flex items-center gap-3 sm:gap-4 md:gap-6 mb-4">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 flex items-center justify-center">
                          <img
                            src={testimonial.maskImage}
                            alt={`${testimonial.author} avatar`}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div>
                          <p className="text-foreground font-black text-lg sm:text-xl md:text-2xl lg:text-3xl mb-1">
                            {testimonial.author}
                          </p>
                          <p className="text-muted text-sm sm:text-base md:text-lg lg:text-xl font-semibold">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>

                      {/* Star Rating */}
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 fill-primary text-primary"
                          />
                        ))}
                      </div>

                      {/* Verified Badge */}
                      <div className="absolute top-4 right-4 bg-accent/20 border-2 border-accent rounded-full px-3 py-1.5 flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-accent" />
                        <span className="text-accent text-xs font-bold">Verified Backer</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-300 rounded-full ${
                  currentIndex === index
                    ? 'w-12 h-3 bg-primary'
                    : 'w-3 h-3 bg-border hover:bg-primary/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
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
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted text-xs sm:text-sm font-semibold uppercase tracking-wide">
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
