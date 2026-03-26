import { motion } from "framer-motion";
import { ReactNode } from "react";

const ease = [0.65, 0, 0.35, 1] as [number, number, number, number];

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
      duration: 0.35,
      ease,
      staggerChildren: 0.04,
    },
  },
  exit: {
    opacity: 0,
    scale: 1.05,
    filter: "blur(6px)",
    borderRadius: "30px",
    transition: {
      duration: 0.25,
      ease,
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
      duration: 0.4,
      ease,
      delay: 0.05,
    },
  },
  exit: {
    scaleY: 1,
    originY: 1,
    transition: {
      duration: 0.3,
      ease,
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
      ease,
    },
  },
  exit: {
    clipPath: "circle(0% at 50% 50%)",
    transition: {
      duration: 0.5,
      ease,
    },
  },
};

const PageTransition = ({ children }: { children: ReactNode }) => {
  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
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
