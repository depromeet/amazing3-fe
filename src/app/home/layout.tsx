import type { PropsWithChildren } from 'react';

const HomeLayout = ({ children }: PropsWithChildren) => {
  return (
    <main className="py-xl flex justify-center bg-gradient1">
      <div className="w-[390px] relative px-xl">{children}</div>
    </main>
  );
};

export default HomeLayout;
