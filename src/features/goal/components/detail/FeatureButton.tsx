import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';

export const FeatureButton = ({ children, ...props }: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>) => {
  return (
    <button
      {...props}
      className="relative w-[48px] h-[48px] bg-white shadow-button rounded-xl flex items-center justify-center hover:scale-105 transition duration-500"
    >
      {children}
    </button>
  );
};
