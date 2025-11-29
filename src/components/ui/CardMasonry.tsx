import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

interface MasonryItem {
  id: string;
  img: string;
  height: number;
  question: string;
  type: string;
}

interface CardMasonryProps {
  autoScroll?: boolean;
  scrollSpeed?: number;
}

const cardImages: MasonryItem[] = [
  {
    id: '1',
    img: '/illustrations/kyogen-card.png',
    height: 384,
    question: 'What mask do you wear most often?',
    type: 'Connection',
  },
  {
    id: '2',
    img: '/illustrations/elvise-card.png',
    height: 384,
    question: 'What truth have you been avoiding?',
    type: 'Revelation',
  },
  {
    id: '3',
    img: '/illustrations/bamana-card.png',
    height: 384,
    question: 'When did you last feel truly seen?',
    type: 'Authenticity',
  },
  {
    id: '4',
    img: '/illustrations/vuvi-card.png',
    height: 384,
    question: "What would you do if you couldn't fail?",
    type: 'Dreams',
  },
  {
    id: '5',
    img: '/illustrations/bamileke-card.png',
    height: 384,
    question: "What's your biggest fear about connection?",
    type: 'Vulnerability',
  },
  {
    id: '6',
    img: '/illustrations/tlaloc-card.png',
    height: 384,
    question: 'Who knows the real you?',
    type: 'Identity',
  },
  {
    id: '7',
    img: '/illustrations/boes-card.png',
    height: 384,
    question: 'What conversation have you been postponing?',
    type: 'Courage',
  },
  {
    id: '8',
    img: '/illustrations/kawakwaka-card.png',
    height: 384,
    question: 'What makes you feel most alive?',
    type: 'Purpose',
  },
  {
    id: '9',
    img: '/illustrations/maori-card.png',
    height: 384,
    question: 'When do you feel like an impostor?',
    type: 'Truth',
  },
  // Duplicate for seamless loop
  {
    id: '10',
    img: '/illustrations/kyogen-card.png',
    height: 384,
    question: 'What mask do you wear most often?',
    type: 'Connection',
  },
  {
    id: '11',
    img: '/illustrations/elvise-card.png',
    height: 384,
    question: 'What truth have you been avoiding?',
    type: 'Revelation',
  },
  {
    id: '12',
    img: '/illustrations/bamana-card.png',
    height: 384,
    question: 'When did you last feel truly seen?',
    type: 'Authenticity',
  },
  {
    id: '13',
    img: '/illustrations/vuvi-card.png',
    height: 384,
    question: "What would you do if you couldn't fail?",
    type: 'Dreams',
  },
  {
    id: '14',
    img: '/illustrations/bamileke-card.png',
    height: 384,
    question: "What's your biggest fear about connection?",
    type: 'Vulnerability',
  },
  {
    id: '15',
    img: '/illustrations/tlaloc-card.png',
    height: 384,
    question: 'Who knows the real you?',
    type: 'Identity',
  },
  {
    id: '16',
    img: '/illustrations/boes-card.png',
    height: 384,
    question: 'What conversation have you been postponing?',
    type: 'Courage',
  },
];

export function CardMasonry({ autoScroll = true, scrollSpeed = 0.5 }: CardMasonryProps) {
  const [scrollY1, setScrollY1] = useState(0);
  const [scrollY2, setScrollY2] = useState(0);
  const [scrollY3, setScrollY3] = useState(0);
  const animationRef = useRef<number>();

  useEffect(() => {
    if (!autoScroll) return;

    const animate = () => {
      setScrollY1((prev) => (prev + scrollSpeed) % 2000);
      setScrollY2((prev) => (prev + scrollSpeed * 0.7) % 2000);
      setScrollY3((prev) => (prev + scrollSpeed * 0.9) % 2000);
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [autoScroll, scrollSpeed]);

  const Column = ({ items, offset }: { items: MasonryItem[]; offset: number }) => (
    <div
      className="flex flex-col gap-2 sm:gap-3 md:gap-4"
      style={{
        transform: `translateY(-${offset}px)`,
      }}
    >
      {items.map((item, index) => (
        <motion.div
          key={`${item.id}-${index}`}
          whileHover={{ scale: 0.95, rotateZ: -2 }}
          transition={{ duration: 0.3 }}
          className="relative overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl border border-border sm:border-2 bg-card shadow-lg w-32 h-48 sm:w-40 sm:h-60 md:w-52 md:h-80 lg:w-64 lg:h-96 group cursor-pointer"
        >
          <img
            src={item.img}
            alt={`Card ${item.id}`}
            className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-30"
            draggable={false}
          />

          {/* Hover Overlay with Question */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 sm:p-4 md:p-6">
            <div className="mb-2">
              <span className="inline-block bg-primary/90 text-primary-foreground text-[10px] sm:text-xs font-bold px-2 py-1 rounded-full">
                {item.type}
              </span>
            </div>
            <p className="text-white text-xs sm:text-sm md:text-base lg:text-lg font-bold leading-tight">
              {item.question}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );

  // Split items into 3 columns
  const column1 = [...cardImages, ...cardImages];
  const column2 = [...cardImages.slice(3), ...cardImages.slice(0, 3), ...cardImages];
  const column3 = [...cardImages.slice(5), ...cardImages.slice(0, 5), ...cardImages];

  return (
    <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden">
      {/* Gradient overlays for fade effect */}
      <div className="absolute top-0 left-0 right-0 h-20 sm:h-24 md:h-32 bg-gradient-to-b from-alt to-transparent z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-24 md:h-32 bg-gradient-to-t from-alt to-transparent z-10 pointer-events-none" />

      <div className="flex gap-2 sm:gap-3 md:gap-4 justify-center">
        <Column items={column1} offset={scrollY1} />
        <Column items={column2} offset={scrollY2} />
        <div className="hidden sm:block">
          <Column items={column3} offset={scrollY3} />
        </div>
      </div>
    </div>
  );
}

export default CardMasonry;
