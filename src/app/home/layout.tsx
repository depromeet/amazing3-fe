import type { PropsWithChildren } from 'react';
import Image from 'next/image';

import PurpleBlurImage from '@/assets/images/purple_blur.png';

const HomeLayout = ({ children }: PropsWithChildren) => {
  return (
    <main className="relative flex justify-center bg-gradient1">
      <div className="absolute right-0">
        <Image src={PurpleBlurImage} width={390} height={125} alt="purple_blur" />
      </div>
      <div className="w-[390px] relative pt-xs">{children}</div>
    </main>
  );
};

export default HomeLayout;
