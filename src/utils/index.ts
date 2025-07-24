import { Variants } from "framer-motion";

// it full slide from left
export const leftAsideVariants = {
  hidden: {
    opacity: 0,
    translateX: "-100%", // Slide in from the left
  },
  visible: {
    opacity: 1,
    translateX: "0%", // Slide to the center
    transition: {
      duration: 0.8, // Animation duration
      // ease: "easeInOut", // Easing function
    },
  },
};

// it full slide from right
export const rightAsideVariants = {
  hidden: {
    opacity: 0,
    translateX: "100%", // Slide in from the right
  },
  visible: {
    opacity: 1.5,
    translateX: "0%", // Slide to the center
    transition: {
      duration: 0.8, // Animation duration
      // ease: "easeInOut", // Easing function
    },
  },
};

// it full slide from top
export const topAsideVariants: Variants = {
  hidden: {
    opacity: 0,
    translateY: "-100%", // Slide in from the top
  },
  visible: {
    opacity: 1,
    translateY: "0%", // Slide to the center
    transition: {
      duration: 1, // Animation duration
      ease: "easeInOut", // Easing function
    },
  },
};

// it full slide from button
export const bottomAsideVariants = {
  hidden: {
    opacity: 0,
    translateY: "100%", // Slide in from the bottom
  },
  visible: {
    opacity: 1,
    translateY: "0%", // Slide to the center
    transition: {
      duration: 1, // Animation duration
      ease: "easeInOut", // Easing function
    },
  },
};

export const splitFromMiddleVariants: Variants = {
  hidden: {
    scaleX: 0,
    originX: 0.5,
  },
  visible: {
    scaleX: 1,
    originX: 0.5,
    transition: {
      duration: 1.4,
      ease: "easeInOut",
    },
  },
};

export const fadeInUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};
