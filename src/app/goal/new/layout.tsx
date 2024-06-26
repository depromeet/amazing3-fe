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
      <div className="w-full h-[100dvh] bg-gradient1 relative">
        <SpeechBubble className="absolute top-[-4%] w-full" />
        <Stars className="absolute top-[28%] left-1/4 w-1/2" />
        <Image
          className="absolute top-[28%] left-1/3 w-1/3 z-[1]"
          src={BandiBoodi}
          alt="BandiBoodi Character"
          priority
        />
        <div className="absolute top-[40%] w-full h-[60%] overflow-hidden">
          <Wave className="absolute w-full" />
        </div>
        <div className="absolute top-0 left-0 w-full h-[calc(100dvh-24px)]">{children}</div>
      </div>
    </CreateGoalFormProvider>
  );
};

export default Layout;
