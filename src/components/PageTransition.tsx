import { motion } from "framer-motion";
import { ReactNode } from "react";

const pageVariants = {
  initial: {
    opacity: 0,
    scale: 0.92,
    filter: "blur(8px)",
    borderRadius: "40px",
  },
  animate: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    borderRadius: "0px",
    transition: {
      duration: 0.6,
      ease: [0.76, 0, 0.24, 1],
      staggerChildren: 0.08,
    },
  },
  exit: {
    opacity: 0,
    scale: 1.05,
    filter: "blur(6px)",
    borderRadius: "30px",
    transition: {
      duration: 0.4,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

const overlayVariants = {
  initial: {
    scaleY: 1,
    originY: 0,
  },
  animate: {
    scaleY: 0,
    originY: 0,
    transition: {
      duration: 0.7,
      ease: [0.76, 0, 0.24, 1],
      delay: 0.1,
    },
  },
  exit: {
    scaleY: 1,
    originY: 1,
    transition: {
      duration: 0.5,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

const liquidVariants = {
  initial: {
    clipPath: "circle(0% at 50% 50%)",
  },
  animate: {
    clipPath: "circle(150% at 50% 50%)",
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1],
    },
  },
  exit: {
    clipPath: "circle(0% at 50% 50%)",
    transition: {
      duration: 0.5,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

const PageTransition = ({ children }: { children: ReactNode }) => {
  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      {/* Liquid morph overlay */}
      <motion.div
        variants={overlayVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 50,
          background: "linear-gradient(135deg, #1565C0, #42A5F5)",
          pointerEvents: "none",
        }}
      />

      {/* Content with morphing clip + blur */}
      <motion.div
        variants={liquidVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <motion.div
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PageTransition;
