import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/* ── Letter-by-letter reveal (shed.design style) ── */
export const TextReveal = ({
  text,
  className = "",
  delay = 0,
  stagger = 0.035,
}: {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const words = text.split(" ");

  return (
    <span ref={ref} className={className} style={{ display: "inline" }}>
      {words.map((word, wi) => (
        <span key={wi} style={{ display: "inline-block", whiteSpace: "nowrap" }}>
          {word.split("").map((char, ci) => {
            const index = words.slice(0, wi).join(" ").length + (wi > 0 ? 1 : 0) + ci;
            return (
              <motion.span
                key={`${wi}-${ci}`}
                style={{ display: "inline-block" }}
                initial={{ opacity: 0, y: 40, rotateX: -90 }}
                animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: delay + index * stagger,
                  ease: [0.215, 0.61, 0.355, 1],
                }}
              >
                {char}
              </motion.span>
            );
          })}
          {wi < words.length - 1 && <span>&nbsp;</span>}
        </span>
      ))}
    </span>
  );
};

/* ── Slide-up line reveal ── */
export const LineReveal = ({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-30px" });

  return (
    <div ref={ref} style={{ overflow: "hidden" }}>
      <motion.div
        className={className}
        initial={{ y: "110%" }}
        animate={inView ? { y: 0 } : {}}
        transition={{ duration: 0.8, delay, ease: [0.33, 1, 0.68, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
};

/* ── Infinite marquee ticker (shed.design style) ── */
export const MarqueeTicker = ({
  text,
  className = "",
  speed = 30,
}: {
  text: string;
  className?: string;
  speed?: number;
}) => {
  const repeated = `${text} — ${text} — ${text} — ${text} — `;

  return (
    <div
      className={className}
      style={{
        overflow: "hidden",
        whiteSpace: "nowrap",
        width: "100%",
      }}
    >
      <motion.div
        style={{ display: "inline-block" }}
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
      >
        <span>{repeated}</span>
        <span>{repeated}</span>
      </motion.div>
    </div>
  );
};

/* ── Fade-up section reveal ── */
export const FadeUpSection = ({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.33, 1, 0.68, 1] }}
    >
      {children}
    </motion.div>
  );
};
