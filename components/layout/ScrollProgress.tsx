'use client';

import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 40,
    restDelta: 0.001,
  });

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-[1.5px] bg-transparent pointer-events-none">
      <motion.div
        className="h-full bg-[#FF2A2A] origin-left shadow-[0_0_6px_rgba(255, 42, 42,0.8)]"
        style={{ scaleX }}
      />
    </div>
  );
};
