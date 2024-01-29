import type { PropsWithChildren } from 'react';

export interface MapCardLayoutProps {
  position: { x: string; y: string };
  cursor?: 'default' | 'cursor';
}

export const MapCardLayout = ({ position, cursor = 'cursor', children }: PropsWithChildren<MapCardLayoutProps>) => {
  return (
    <div
      className={`flex flex-col items-center absolute w-[130px] h-[130px] rounded-lg bg-white p-[5px] ${position.x} ${position.y} overflow-hidden cursor-${cursor}`}
    >
      {children}
    </div>
  );
};
