import type { FC, SVGProps } from 'react';
import type { Route } from 'next';
import Link from 'next/link';

import { colors } from '@/../styles/theme';
import { Typography } from '@/components';

interface SubMenuProps<T extends string> {
  href: Route<T>;
  Icon: FC<SVGProps<SVGSVGElement>>;
  menuName: string;
  active?: boolean;
}

export const SubMenu = <T extends string>({ href, Icon, menuName, active = false }: SubMenuProps<T>) => {
  return (
    <Link href={href} className="flex flex-col items-center group">
      <Icon
        className="w-[40px] h-[40px] transition-colors duration-300 group-hover:fill-gray-50"
        fill={active ? colors.gray[50] : colors.gray[40]}
      />
      <Typography
        type="caption1"
        className={`${
          active ? 'text-gray-50' : 'text-gray-40'
        } transition-colors duration-300 group-hover:text-gray-50 `}
      >
        {menuName}
      </Typography>
    </Link>
  );
};
