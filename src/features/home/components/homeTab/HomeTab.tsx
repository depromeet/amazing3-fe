import type { FC, SVGProps } from 'react';
import { useState } from 'react';

import { HomeTabMenu } from './HomeTabMenu';

interface TabMenu {
  name: string;
  Icon: FC<SVGProps<SVGSVGElement>>;
  ActiveIcon: FC<SVGProps<SVGSVGElement>>;
}

interface HomeTabProps {
  tabList: TabMenu[];
  onChangeActiveTab: (tab?: TabMenu) => void;
}

export const HomeTab = ({ tabList, onChangeActiveTab }: HomeTabProps) => {
  const [activeMenu, setActiveMenu] = useState<TabMenu>(tabList[0]);

  const handleClickMenu = (tab: TabMenu) => () => {
    onChangeActiveTab(tab);
    setActiveMenu(tab);
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

        <span className="absolute w-[24px] h-[24px] top-0 left-0 -z-10 origin-center rounded-sm bg-white transition-all duration-300 peer-checked/tab-1:left-[50%]"></span>
      </div>
    </div>
  );
};
