import type { PropsWithChildren } from 'react';

interface FeatureButtonProps {
  onClick?: VoidFunction;
}

export const FeatureButton = ({ onClick, children }: PropsWithChildren<FeatureButtonProps>) => {
  return (
    <button
      onClick={onClick}
      className="relative w-[48px] h-[48px] bg-white shadow-button rounded-xl flex items-center justify-center hover:scale-105 transition duration-500"
    >
      {children}
    </button>
  );
};
