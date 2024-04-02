import type { FC, SVGProps } from 'react';
import type { Route } from 'next';
import Link from 'next/link';

interface MainMenuProps<T extends string> {
  href: Route<T>;
  Icon: FC<SVGProps<SVGSVGElement>>;
}

export const MainMenu = <T extends string>({ href, Icon }: MainMenuProps<T>) => {
  return (
    <Link href={href} className="w-[56px] h-[56px] flex justify-center items-center bg-blue-35 rounded-full">
      <Icon className="w-[32px] h-[32px]" fill="white" />
    </Link>
  );
};
