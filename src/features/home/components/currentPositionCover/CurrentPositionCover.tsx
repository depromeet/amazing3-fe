import React from 'react';

import CurrentPositionIcon from '@/assets/icons/home/current-position-icon.svg';

const absolutePosition = {
  0: { x: 'left-[-20px]', y: 'top-[70px]' },
  1: { x: 'left-[175px]', y: 'top-[70px]' },
  2: { x: 'right-[32px]', y: 'top-[190px]' },
  3: { x: 'left-[110px]', y: 'top-[245px]' },
  4: { x: 'left-[140px]', y: 'bottom-[80px]' },
  5: { x: 'left-[-20px]', y: 'bottom-[80px]' },
  6: { x: 'right-[100px]', y: 'bottom-[80px]' },
  7: { x: 'right-[120px]', y: 'top-[245px]' },
  8: { x: 'left-[80px]', y: 'top-[155px]' },
  9: { x: 'left-[175px]', y: 'top-[70px]' },
};

interface CurrentPositionCoverProps {
  currentPosition: number;
}

export const CurrentPositionCover = ({ currentPosition }: CurrentPositionCoverProps) => {
  return (
    absolutePosition[currentPosition] && (
      <div className={`absolute ${absolutePosition[currentPosition].x} ${absolutePosition[currentPosition].y}`}>
        <CurrentPositionIcon />
      </div>
    )
  );
};
