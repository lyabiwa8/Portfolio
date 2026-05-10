"use client";

import React from 'react';
import { getAssetPath } from '@/utils/imageLoader';

interface SpiderVideoProps {
  className?: string;
}

export const SpiderVideo: React.FC<SpiderVideoProps> = ({ className }) => {
  return (
    <div className={className}>
      <video
        src={getAssetPath("/images/images/spider_nav.webm")}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-contain"
      />
    </div>
  );
};
