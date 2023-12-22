import type { PropsWithChildren } from 'react';
import Image from 'next/image';

import PurpleBlurImage from '@/assets/images/purple-blur.png';

const HomeLayout = ({ children }: PropsWithChildren) => {
  return (
    <main className="relative flex justify-center bg-gradient1">
      <div className="absolute right-0">
        <Image src={PurpleBlurImage} width={390} height={125} alt="purple_blur" />
      </div>
      <div className="w-full h-[100vh]">{children}</div>
    </main>
  );
};

export default HomeLayout;
