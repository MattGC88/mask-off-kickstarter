import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import Button from '../ui/button';
import { Check, Sparkles, Crown, Gift, Zap } from 'lucide-react';

const tiers = [
  {
    name: "TRUTH SEEKER",
    price: 1,
    icon: Gift,
    badge: "Perfect Entry",
    badgeColor: "bg-accent/20 border-accent/40 text-accent",
    includes: [
      "1 Exclusive Expansion Card",
      "Early access to future packs",
      "VIP email updates"
    ],
    cta: "Claim $1 Card",
    highlight: false,
  },
  {
    name: "MASK BREAKER",
    price: 29,
    originalPrice: 39,
    icon: Sparkles,
    badge: "🔥 EARLY BIRD",
    badgeColor: "bg-primary text-primary-foreground",
    limited: "50 remaining",
    includes: [
      "Full MaskOff Game (57 cards)",
      "All 10 Power Cards",
      "Premium card stock",
      "Exclusive backer design",
      "Instant Print & Play version"
    ],
    cta: "Save $10 Now",
    highlight: true,
  },
  {
    name: "AUTHENTICITY CHAMPION",
    price: 59,
    icon: Crown,
    badge: "💎 PREMIUM",
    badgeColor: "bg-secondary/20 border-secondary/40 text-secondary",
    limited: "12 remaining",
    includes: [
      "Everything in Mask Breaker",
      "Expansion pack (15 cards)",
      "Premium foil box",
      "Limited edition art print",
      "Discord access",
      "Name in credits"
    ],
    cta: "Get Premium",
    highlight: false,
  },
  {
    name: "TRUTH DEALER",
    price: 149,
    icon: Zap,
    badge: "🎁 PARTY PACK",
    badgeColor: "bg-accent/20 border-accent/40 text-accent",
    limited: "5 remaining",
    includes: [
      "Everything in previous tiers",
      "5 complete game copies",
      "Custom card creation (1 card)",
      "Video call with creator",
      "Lifetime expansion access"
    ],
    cta: "Host Epic Nights",
    highlight: false,
  }
];

const whyBackNow = [
  {
    icon: Check,
    title: "Save 25% vs Retail",
    description: "Lowest price ever offered"
  },
  {
    icon: Check,
    title: "Exclusive Backer Designs",
    description: "Card art only for Kickstarter"
  },
  {
    icon: Check,
    title: "First Access to Expansions",
    description: "Future packs before retail"
  },
  {
    icon: Check,
    title: "Shape the Game's Future",
    description: "Backer input on new cards"
  }
];

export function BackerRewards() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-24 px-4 relative bg-background overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-[url('/mask-pattern.svg')] bg-repeat" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-8"
        >
          <Gift className="h-4 w-4 text-primary" />
          <span className="text-primary text-sm font-semibold uppercase tracking-wide">
            Backer Rewards
          </span>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-center mb-6"
        >
          <span className="text-foreground">CHOOSE YOUR</span>{' '}
          <span className="text-primary">REWARD TIER</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.1 }}
          className="text-lg sm:text-xl md:text-2xl text-muted text-center mb-16 max-w-3xl mx-auto leading-relaxed"
        >
          Every tier delivers instant value. Kickstarter exclusives you can't get anywhere else.
        </motion.p>

        {/* Tier Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1 }}
              className={`relative ${
                tier.highlight
                  ? 'lg:scale-105 lg:-mt-4'
                  : ''
              }`}
            >
              <div
                className={`relative h-full border-2 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:shadow-2xl ${
                  tier.highlight
                    ? 'border-primary bg-primary/5 shadow-xl'
                    : 'border-border bg-card hover:border-primary/50'
                }`}
              >
                {/* Badge */}
                <div className={`absolute -top-4 left-1/2 -translate-x-1/2 ${tier.badgeColor} border-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap`}>
                  {tier.badge}
                </div>

                {/* Limited indicator */}
                {tier.limited && (
                  <div className="text-accent text-xs sm:text-sm font-black mb-3 mt-2 text-center">
                    ⚡ {tier.limited}
                  </div>
                )}

                {/* Icon */}
                <div className="flex justify-center mb-4 mt-6">
                  <tier.icon className="w-12 h-12 sm:w-14 sm:h-14 text-primary" strokeWidth={2} />
                </div>

                {/* Name */}
                <h3 className="text-lg sm:text-xl font-black text-center mb-4 text-foreground leading-tight">
                  {tier.name}
                </h3>

                {/* Price */}
                <div className="text-center mb-6">
                  <span className="text-4xl sm:text-5xl font-black text-primary">${tier.price}</span>
                  {tier.originalPrice && (
                    <div className="mt-1">
                      <span className="text-lg text-muted line-through">
                        ${tier.originalPrice}
                      </span>
                      <span className="ml-2 text-sm font-bold text-accent">
                        Save ${tier.originalPrice - tier.price}
                      </span>
                    </div>
                  )}
                </div>

                {/* Includes */}
                <ul className="space-y-3 mb-8 flex-1">
                  {tier.includes.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" strokeWidth={3} />
                      <span className="text-sm text-muted leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="https://www.backerkit.com/call_to_action/76df4bd8-01ac-412d-b684-39c90284624b/landing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button
                    variant={tier.highlight ? "default" : "outline"}
                    className={`w-full ${tier.highlight ? 'bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg' : 'border-primary/30 text-primary hover:bg-primary/10'}`}
                    size="lg"
                  >
                    {tier.cta}
                  </Button>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why Back Now section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="bg-alt border-2 border-border rounded-2xl p-8 sm:p-10"
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-black mb-8 text-center">
            <span className="text-foreground">WHY BACK ON</span>{' '}
            <span className="text-primary">KICKSTARTER?</span>
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {whyBackNow.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="shrink-0 w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                  <reason.icon className="w-6 h-6 text-primary" strokeWidth={3} />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-black text-foreground mb-1">
                    {reason.title}
                  </h4>
                  <p className="text-sm sm:text-base text-muted">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default BackerRewards;
