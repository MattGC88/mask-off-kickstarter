import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Users, Clock } from 'lucide-react';

export function GameplayPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-24 px-4 relative bg-background">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-alt via-background to-alt opacity-50" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-16 gap-6">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-5xl md:text-6xl font-black leading-tight"
          >
            <span className="text-foreground">HOW TO</span>{' '}
            <span className="text-primary">PLAY</span>
          </motion.h2>

          {/* Player + Time info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            className="flex gap-6"
          >
            {/* Players */}
            <div className="flex items-center gap-3">
              <Users className="w-8 h-8" />
              <div>
                <p className="text-sm font-bold">2–7 Players</p>
                <p className="text-xs text-muted">Ages 7+</p>
              </div>
            </div>

            {/* Time */}
            <div className="flex items-center gap-3">
              <Clock className="w-8 h-8" />
              <div>
                <p className="text-sm font-bold">1–10 min</p>
                <p className="text-xs text-muted">per round</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Main Layout - 3 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-10">
            {/* OBJECT */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="bg-card/50 border border-border rounded-2xl p-6"
            >
              <SectionTitle number="1" title="The Object" />
              <p className="text-sm text-muted leading-relaxed">
                Match masks. Get rid of your cards before anyone else. These are the official rules
                to reveal your true self. House rules welcome.
              </p>
            </motion.div>

            {/* SETUP */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="bg-card/50 border border-border rounded-2xl p-6"
            >
              <SectionTitle number="2" title="The Set Up" />

              <p className="text-sm text-muted mb-3">
                Shuffle the deck. Deal each player 7 cards. Keep them secret. Place the rest face
                down as the draw pile.
              </p>
              <p className="text-sm text-muted mb-4">
                Flip the top card to start the discard pile — the game begins.
              </p>

              <img
                src="/illustrations/setup-diagram.png"
                alt="Game setup diagram"
                className="rounded-xl w-full bg-alt/50 p-3"
              />
            </motion.div>
          </div>

          {/* MIDDLE COLUMN */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.25 }}
            className="flex flex-col gap-10"
          >
            <div className="bg-card/50 border border-border rounded-2xl p-6">
              <SectionTitle number="3" title="The Gameplay" />

              <p className="text-sm text-muted mb-6">
                The first player to match a mask starts the game. Play continues clockwise.
              </p>

              {/* Block */}
              <GameplayBlock
                label="DON'T BE TWO FACED"
                text="Most cards have two masks. Match either mask to play."
                image="/illustrations/two-faced.png"
              />

              <GameplayBlock
                label="THE RULE OF 3s"
                text="If you have 3 cards showing the same mask, play all three at once."
                image="/illustrations/rule-of-3s.png"
              />

              {/* Rainbow Card */}
              <GameplayBlock
                label="RAINBOW (ALL-MASK) CARD"
                image="/illustrations/rainbow-card.png"
                text="Play on any card. You choose what mask it becomes. Next player must match it—or play another Rainbow."
                extraNote="The only card you cannot change into is another Rainbow card."
              />
            </div>
          </motion.div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-10">
            {/* DRAW */}
            <InfoCard
              delay={0.4}
              label="DRAW"
              image="/illustrations/draw-card.png"
              points={[
                'If you have no match, draw a card.',
                'If it matches, play it.',
                'If not, draw one more. If still no match, your turn ends.',
              ]}
            />

            {/* POWER CARDS */}
            <InfoCardImage
              delay={0.5}
              label="POWER (SINGLE MASK) CARDS"
              image="/illustrations/power-cards.png"
              text="Single Masks have special abilities. They can be played on matching masks, Rainbows, or inside 3s."
            />

            {/* WIN */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.55 }}
              className="bg-card/50 border border-border rounded-2xl p-6"
            >
              <SectionTitle number="4" title="How To Win" />
              <p className="text-sm text-muted mb-4">Get rid of all your masks — you win.</p>

              <div className="space-y-4 text-xs">
                <WinBlock title="Casual mode:" text="Count how many rounds each player wins." />
                <WinBlock
                  title="Strategic mode:"
                  text="Count leftover masks as points: Rainbow = 10, Power Masks = 5, Others = 1. Low score wins."
                />
              </div>
            </motion.div>

            {/* QUICK CHECKS */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.65 }}
              className="bg-card/50 border border-border rounded-2xl p-6"
            >
              <SectionTitle number="5" title="Quick Checks" />

              <QuickCheck
                q="Can I play two of the same cards even if they match?"
                a="No. Only one card or three matching cards."
              />
              <QuickCheck
                q="Can I play a single mask action card even if it doesn't match?"
                a="No. Single masks must match."
              />
              <QuickCheck
                q="What if someone played an unmatching card and I caught it?"
                a="Keep playing. Stay sharp."
              />

              <div className="mt-4 bg-accent/10 border-2 border-accent/40 rounded-xl p-4">
                <p className="text-xs font-bold text-accent">
                  ⚠️ Increased authenticity may seem strange at first.
                </p>
              </div>
            </motion.div>

            {/* BONUSES */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.75 }}
              className="bg-card/50 border border-border rounded-2xl p-6"
            >
              <SectionTitle number="6" title="Bonuses" />
              <p className="text-sm text-muted mb-3">
                Try the <strong>Rapid version</strong> — no turns. Slam matching cards fast.
              </p>
              <p className="text-sm text-muted">
                Or try the <strong>Pod version</strong>: collect masks instead of discarding them.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- COMPONENTS ---------------------------------- */

function SectionTitle({ number, title }: { number: string; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-foreground text-background font-black text-xl">
        {number}
      </div>
      <h3 className="text-2xl font-black">{title}</h3>
    </div>
  );
}

function GameplayBlock({
  label,
  text,
  image,
  extraNote,
}: {
  label: string;
  text: string;
  image: string;
  extraNote?: string;
}) {
  return (
    <div className="mb-8">
      <div className="bg-foreground text-background px-4 py-1 rounded-full inline-block font-bold text-xs mb-3">
        {label}
      </div>

      <p className="text-sm text-muted mb-4">{text}</p>

      <img src={image} alt={label} className="rounded-xl w-full bg-alt/50 p-3" />

      {extraNote && (
        <div className="mt-3 bg-accent/10 border border-accent/30 rounded-md p-3">
          <p className="text-xs text-accent">{extraNote}</p>
        </div>
      )}
    </div>
  );
}

function InfoCard({
  delay,
  label,
  image,
  points,
}: {
  delay: number;
  label: string;
  image: string;
  points: string[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="bg-card/50 border border-border rounded-2xl p-6"
    >
      <div className="bg-foreground text-background px-4 py-1 rounded-full inline-block font-bold text-xs mb-4">
        {label}
      </div>

      <div className="grid grid-cols-[110px_1fr] gap-4">
        <img src={image} alt={label} className="rounded-lg bg-alt/40 p-2" />

        <ul className="text-xs text-muted space-y-1">
          {points.map((p, i) => (
            <li key={i}>- {p}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

function InfoCardImage({
  delay,
  label,
  image,
  text,
}: {
  delay: number;
  label: string;
  image: string;
  text: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="bg-card/50 border border-border rounded-2xl p-6"
    >
      <div className="bg-foreground text-background px-4 py-1 rounded-full inline-block font-bold text-xs mb-4">
        {label}
      </div>

      <p className="text-sm text-muted mb-4">{text}</p>

      <img src={image} alt={label} className="rounded-xl w-full bg-alt/50 p-3" />
    </motion.div>
  );
}

function WinBlock({ title, text }: { title: string; text: string }) {
  return (
    <div>
      <p className="font-bold text-foreground mb-1 text-sm">{title}</p>
      <p className="text-muted text-xs leading-relaxed">{text}</p>
    </div>
  );
}

function QuickCheck({ q, a }: { q: string; a: string }) {
  return (
    <div className="mb-4">
      <p className="text-sm font-bold text-foreground">{q}</p>
      <p className="text-xs text-muted">{a}</p>
    </div>
  );
}

export default GameplayPreview;
