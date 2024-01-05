import React from 'react';
import { m } from 'framer-motion';

import CurrentPositionIcon from '@/assets/icons/home/current-position-icon.svg';

const absolutePosition = [
  { x: 'left-[-20px]', y: 'top-[70px]' },
  { x: 'left-[175px]', y: 'top-[70px]' },
  { x: 'right-[32px]', y: 'top-[190px]' },
  { x: 'left-[110px]', y: 'top-[245px]' },
  { x: 'left-[140px]', y: 'bottom-[80px]' },
  { x: 'left-[-20px]', y: 'bottom-[80px]' },
  { x: 'right-[100px]', y: 'bottom-[80px]' },
  { x: 'right-[120px]', y: 'top-[245px]' },
  { x: 'left-[80px]', y: 'top-[155px]' },
  { x: 'left-[175px]', y: 'top-[70px]' },
];

interface CurrentPositionCoverProps {
  currentPosition: number;
}

export const CurrentPositionCover = ({ currentPosition }: CurrentPositionCoverProps) => {
  return (
    absolutePosition[currentPosition] && (
      <div className={`absolute ${absolutePosition[currentPosition].x} ${absolutePosition[currentPosition].y}`}>
        <m.div initial={initial} animate={animate} transition={transition}>
          <CurrentPositionIcon />
        </m.div>
      </div>
    )
  );
};

const initial = {
  opacity: 0,
  scale: 0.5,
};

const animate = {
  opacity: 1,
  scale: 1,
};

const transition = {
  duration: 0.3,
  scale: { type: 'spring', damping: 10, stiffness: 100, restDelta: 0.001 },
};
