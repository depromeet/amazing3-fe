import type { ReactNode } from 'react';

import { Typography } from '@/components';

export interface OnboardingLayoutProps {
  title: string | ReactNode;
  sticker: ReactNode;
}

export const OnboardingLayout = ({ title, sticker }: OnboardingLayoutProps) => {
  return (
    <section className="w-full h-full flex justify-center">
      <div className="w-[80%]">
        <Typography type="heading1" className="text-blue-50 mr-auto">
          {title}
        </Typography>
        <div className="w-full h-[60vh] flex justify-center items-center">{sticker}</div>
      </div>
    </section>
  );
};
