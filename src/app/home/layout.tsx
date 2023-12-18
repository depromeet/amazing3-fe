import type { PropsWithChildren } from 'react';

const HomeLayout = ({ children }: PropsWithChildren) => {
  return (
    <main className="py-[24px] flex justify-center bg-gradient1">
      <div className="w-[390px] relative px-[24px]">{children}</div>
    </main>
  );
};

export default HomeLayout;
