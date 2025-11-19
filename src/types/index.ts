import { LucideIcon } from 'lucide-react';
import { MotionValue } from 'motion/react';

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Stat {
  end: number;
  label: string;
  prefix?: string;
  suffix?: string;
  delay: number;
}

export interface GalleryItem {
  id: number;
  height: string;
}

export interface PlayingCardProps {
  delay: number;
  rotation: number;
  xOffset: number;
  scrollProgress: MotionValue<number>;
  cardNumber: number;
}

export interface PlayingCardVariant {
  cardNumber: number;
  delay: number;
  rotation: number;
  xOffset: number;
  rank: string;
  suit: string;
}
