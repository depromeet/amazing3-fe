import type { PropsWithChildren } from 'react';

import StarBg from './startBg';

const HomeLayout = ({ children }: PropsWithChildren) => {
  return (
    <main className="flex justify-center bg-gradient1">
      <div className="w-[390px] relative px-xl pt-xs">
        <StarBg />
        {children}
      </div>
    </main>
  );
};

export default HomeLayout;
