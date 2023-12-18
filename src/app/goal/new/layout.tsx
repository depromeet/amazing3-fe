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
      <div className="w-full h-[calc(100vh-24px)] bg-gradient1 relative">
        <div className="absolute top-0 w-full">
          <SpeechBubble />
        </div>
        <div className="absolute top-[26%] left-1/4 w-full">
          <Stars />
        </div>
        <div className="absolute top-[28%] left-1/3 w-full z-1">
          <Image className="w-[31%]" src={BandiBoodi} alt="BandiBoodi Character" priority />
        </div>
        <div className="absolute top-[38%] w-full">
          <Wave />
        </div>
        {children}
        <button className=" mt-[100%] z-10">asd</button>
      </div>
    </CreateGoalFormProvider>
  );
};

export default Layout;
