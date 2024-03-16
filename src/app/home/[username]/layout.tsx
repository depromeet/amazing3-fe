import type { PropsWithChildren } from 'react';
import type { Metadata } from 'next';

import { getMetadata } from '@/utils/getMetadata';

import type { HomeRouteParams } from './page';

export const generateMetadata = async ({ params: { username } }: HomeRouteParams): Promise<Metadata> => {
  return getMetadata({ title: `반짝반짝 빛날 ${username}님의 인생지도`, asPath: `/home/${username}` });
};

const HomeLayout = ({ children }: PropsWithChildren) => {
  return (
    <main className="relative flex justify-center bg-gradient1">
      <div className="absolute right-0 w-full h-[125px] bg-gradientPurpleBlur" />
      <div className="w-full h-[100dvh]">
        <div className="w-full h-[100dvh] flex flex-col items-center justify-between">{children}</div>
      </div>
    </main>
  );
};

export default HomeLayout;

export const runtime = 'edge';
