"use client";

import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { motion } from 'framer-motion';

interface LottieAnimationProps {
  className?: string;
}

export const LottieAnimation: React.FC<LottieAnimationProps> = ({ className }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className={className}
    >
      <DotLottieReact
        src="https://lottie.host/16b69e12-0efb-4061-b33d-12dc2b93fd84/Ax2k12jKRd.lottie"
        loop
        autoplay
        className="w-full h-full"
      />
    </motion.div>
  );
};
