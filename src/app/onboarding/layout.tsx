import type { PropsWithChildren } from 'react';

const OnboardingLayout = ({ children }: PropsWithChildren) => {
  return <div className="w-full h-[100vh] bg-gradient2 pt-[10vh] pb-xs">{children}</div>;
};

export default OnboardingLayout;
