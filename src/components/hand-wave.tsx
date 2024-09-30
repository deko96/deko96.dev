"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function HandWave() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <motion.div
      ref={ref}
      style={{ display: "inline-block" }}
      animate={{
        rotate: isInView ? [0, 30, -10, 30, -10, 0] : 0,
      }}
      transition={{
        duration: 1.5,
        ease: "easeInOut",
      }}
    >
      👋
    </motion.div>
  );
}
