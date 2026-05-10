"use client";

import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { motion } from 'framer-motion';

interface LottieAnimationProps {
  className?: string;
}

export const LottieAnimation: React.FC<LottieAnimationProps> = ({ className }) => {
  return (
    <div className={`${className} bg-transparent`}>
      <DotLottieReact
        src="/images/images/animation_spider.json"
        loop
        autoplay
        className="w-full h-full bg-transparent"
      />
    </div>
  );
};
