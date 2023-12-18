'use client';

import type { PropsWithChildren } from 'react';
import Image from 'next/image';

import BandiBoodi from '@/assets/images/bandi-boodi.png';
import SpeechBubble from '@/assets/images/bg-speech-bubble.svg';
import Stars from '@/assets/images/bg-stars.svg';
import Wave from '@/assets/images/bg-wave.svg';
import CreateGoalFormProvider from '@/features/goal/contexts/CreateGoalFormProvider';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <CreateGoalFormProvider>
      <div className="w-full h-screen bg-gradient1 relative">
        <div className="absolute top-[-7%] w-full">
          <SpeechBubble />
        </div>
        <div className="absolute top-1/4 left-1/4 w-full">
          <Stars />
        </div>
        <div className="absolute top-[28%] left-1/3 w-full z-10">
          <Image className="w-1/3" src={BandiBoodi} alt="BandiBoodi Character" priority />
        </div>
        <div className="absolute top-[40%] w-full">
          <Wave />
        </div>
        {children}
      </div>
    </CreateGoalFormProvider>
  );
};

export default Layout;
