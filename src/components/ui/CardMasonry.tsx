import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

interface MasonryItem {
  id: string;
  img: string;
  height: number;
}

interface CardMasonryProps {
  autoScroll?: boolean;
  scrollSpeed?: number;
}

const cardImages: MasonryItem[] = [
  { id: '1', img: '/images/card-lile-orange.svg', height: 384 },
  { id: '2', img: '/illustrations/card-8.png', height: 384 },
  { id: '3', img: '/images/beige-green-card.svg', height: 384 },
  { id: '4', img: '/illustrations/card-7.png', height: 384 },
  { id: '5', img: '/illustrations/card-1.svg', height: 384 },
  { id: '6', img: '/illustrations/card-2.svg', height: 384 },
  { id: '7', img: '/illustrations/card-3.svg', height: 384 },
  { id: '8', img: '/illustrations/card-4.svg', height: 384 },
  { id: '9', img: '/illustrations/card-5.png', height: 384 },
  { id: '10', img: '/illustrations/card-6.png', height: 384 },
  { id: '11', img: '/illustrations/card-7.png', height: 384 },
  { id: '12', img: '/images/blue-beige.svg', height: 384 },
  { id: '13', img: '/illustrations/card-9.png', height: 384 },
  // Duplicate for seamless loop
  { id: '14', img: '/images/card-lile-orange.svg', height: 384 },
  { id: '15', img: '/illustrations/card-1.svg', height: 384 },
  { id: '16', img: '/illustrations/card-5.png', height: 384 },
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
          className="relative overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl border border-border sm:border-2 bg-card shadow-lg w-32 h-48 sm:w-40 sm:h-60 md:w-52 md:h-80 lg:w-64 lg:h-96"
        >
          <img
            src={item.img}
            alt={`Card ${item.id}`}
            className="w-full h-full object-cover"
            draggable={false}
          />
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
