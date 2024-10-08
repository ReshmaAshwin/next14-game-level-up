import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Sparkle: React.FC<{ x: string; y: string }> = ({ x, y }) => {
  const sparkleVariants = {
    visible: {
      scale: [1, 1.5, 1],
      opacity: [0, 1, 0],
      transition: { duration: 1, ease: "easeInOut", repeat: 2 },
    },
    hidden: { scale: 0, opacity: 0 },
  };

  return (
    <motion.div
      className="absolute"
      style={{ left: x, top: y }}
      variants={sparkleVariants}
      initial="hidden"
      animate="visible"
    >
      <Image src="/star.svg" alt="Sparkle" width={400} height={200} className="w-4 h-2" />
    </motion.div>
  );
};

export default Sparkle;
