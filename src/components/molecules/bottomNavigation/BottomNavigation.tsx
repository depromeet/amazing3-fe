'use client';

import type { Route } from 'next';
import { usePathname } from 'next/navigation';

import FeedIcon from '@/assets/icons/feed-icon.svg';
import HomeIcon from '@/assets/icons/home-icon.svg';
import PlusIcon from '@/assets/icons/plus.svg';
import UserIcon from '@/assets/icons/user.svg';

import { MainMenu } from './MainMenu';
import { SubMenu } from './SubMenu';

export const BottomNavigation = () => {
  const pathname = usePathname() as Route;

  const isHome = pathname?.startsWith('/home');

  return (
    <div className="sticky bottom-0 flex justify-center gap-[48px] w-full bg-white pt-5xs pb-xs px-xs shadow-thumb">
      <SubMenu href="/feed" active={pathname === '/feed'} Icon={FeedIcon} menuName="목표 피드" />
      <MainMenu href={isHome ? '/goal/new/goal' : pathname} Icon={isHome ? PlusIcon : HomeIcon} />
      <SubMenu href="/my" active={pathname === '/my'} Icon={UserIcon} menuName="마이" />
    </div>
  );
};
