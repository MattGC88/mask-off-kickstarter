import { Sparkles, Shield, Package, Users } from 'lucide-react';

// Features section data
export const FEATURES = [
  {
    icon: Sparkles,
    title: 'Premium Quality',
    description: 'Crafted with the finest materials for exceptional durability',
  },
  {
    icon: Shield,
    title: 'Unique Design',
    description: 'Original artwork that stands out from traditional decks',
  },
  {
    icon: Package,
    title: 'Limited Edition',
    description: 'Numbered boxes ensuring exclusivity and collectibility',
  },
  {
    icon: Users,
    title: 'Community Driven',
    description: 'Designed with input from professional players',
  },
];

// Stats section data
export const STATS = [
  { end: 2500, label: 'Backers', suffix: '+', delay: 200 },
  { end: 125, label: 'Funded', prefix: '$', suffix: 'K', delay: 400 },
  { end: 98, label: 'Satisfaction', suffix: '%', delay: 600 },
  { end: 14, label: 'Days Left', delay: 800 },
];

// Gallery section data
export const GALLERY_ITEMS = [
  { id: 1, height: 'h-64' },
  { id: 2, height: 'h-80' },
  { id: 3, height: 'h-72' },
  { id: 4, height: 'h-64' },
  { id: 5, height: 'h-80' },
  { id: 6, height: 'h-72' },
];

// Playing card variants
export const PLAYING_CARDS = [
  { cardNumber: 1, delay: 0.2, rotation: -15, xOffset: -200, rank: 'A', suit: '♠' },
  { cardNumber: 2, delay: 0.4, rotation: 0, xOffset: 0, rank: 'K', suit: '♥' },
  { cardNumber: 3, delay: 0.6, rotation: 15, xOffset: 200, rank: 'Q', suit: '♣' },
];

// Call to action data
export const CTA_DATA = {
  badge: 'Limited Time Offer',
  heading: 'Be Part of Something Special',
  description: 'Join thousands of backers in bringing this unique playing card deck to life.',
  earlyBirdSpots: 250,
  buttons: {
    primary: 'Pledge Now',
    secondary: 'View Rewards',
  },
};

// Hero section data
export const HERO_DATA = {
  title: 'Unveil the Mystery',
  subtitle: 'Premium Playing Cards',
  description:
    'Experience the perfect blend of artistry and functionality with our limited edition playing card deck.',
  buttons: {
    primary: 'Back This Project',
    secondary: 'Watch Video',
  },
};

// Footer data
export const FOOTER_DATA = {
  copyright: '2024 Mask-Off Playing Cards. All rights reserved.',
};
