"use client";

import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { motion } from 'framer-motion';

interface LottieAnimationProps {
  className?: string;
}

export const LottieAnimation: React.FC<LottieAnimationProps> = ({ className }) => {
  return (
    <div className={className}>
      <DotLottieReact
        src="https://lottie.host/d2f39a3b-306d-4a3b-b206-6d1ce226c5a4/3aPSUo9Oao.lottie"
        loop
        autoplay
        className="w-full h-full"
      />
    </div>
  );
};
