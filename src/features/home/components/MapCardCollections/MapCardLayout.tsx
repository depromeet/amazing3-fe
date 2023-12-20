import type { PropsWithChildren } from 'react';

export interface MapCardLayoutProps {
  position: { x: string; y: string };
}

export const MapCardLayout = ({ position, children }: PropsWithChildren<MapCardLayoutProps>) => {
  return (
    <div
      className={`absolute w-[130px] h-[130px] rounded-lg bg-white pt-[5px] pb-[6px] px-[16px] shadow-thumb cursor-pointer ${position.x} ${position.y} overflow-hidden`}
    >
      {children}
    </div>
  );
};
