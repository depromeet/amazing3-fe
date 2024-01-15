import type { PropsWithChildren } from 'react';

const OnboardingLayout = ({ children }: PropsWithChildren) => {
  return <div className="w-full h-[100dvh] max-h-[100dvh] pt-[5dvh] bg-gradient2 pb-xs">{children}</div>;
};

export default OnboardingLayout;
