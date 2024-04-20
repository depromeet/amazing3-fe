import type { Dispatch, FC, SetStateAction, SVGProps } from 'react';
import { useState } from 'react';
import type { Route } from 'next';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { useUpdateQueryString } from '@/hooks/useUpdateQueryString';

import { HomeTabMenu } from './HomeTabMenu';

interface TabMenu {
  name: string;
  Icon: FC<SVGProps<SVGSVGElement>>;
  ActiveIcon: FC<SVGProps<SVGSVGElement>>;
}

interface HomeTabProps {
  tabList: TabMenu[];
  onChangeActiveTab: Dispatch<SetStateAction<TabMenu>>;
}

export const HomeTab = ({ tabList, onChangeActiveTab }: HomeTabProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const updateQueryString = useUpdateQueryString();

  const currentTabName = searchParams.get('tab') ?? tabList[0].name;
  const initialActiveTabIndex = tabList.findIndex((tab) => tab.name === currentTabName) || 0;

  const [activeMenu, setActiveMenu] = useState<TabMenu>(tabList[initialActiveTabIndex]);

  const handleClickMenu = (tab: TabMenu) => () => {
    onChangeActiveTab(tab);
    setActiveMenu(tab);

    const queryString = updateQueryString('tab', tab.name);
    router.push(`${pathname}?${queryString}` as Route);
  };

  return (
    <div className="w-fit rounded-[6px] bg-[#BAE0FF] p-[2px]">
      <div className="flex gap-[4px] z-0 relative p-[2px]">
        {tabList.map((tab, index) => {
          const isActive = tab.name === activeMenu.name;

          return (
            <HomeTabMenu
              key={tab.name}
              htmlFor={tab.name}
              Icon={isActive ? tab.ActiveIcon : tab.Icon}
              onClick={handleClickMenu(tab)}
              className={`peer/tab-${index}`}
            />
          );
        })}

        <span
          className={`absolute w-[24px] h-[24px] top-0 left-0 -z-10 origin-center rounded-sm bg-white transition-all duration-300 peer-checked/tab-1:left-[50%] ${
            initialActiveTabIndex === 0 ? 'left-0' : 'left-[50%]'
          }`}
        ></span>
      </div>
    </div>
  );
};
