import type { PropsWithChildren } from 'react';
import type { Metadata } from 'next';

import { META_ONBOARDING } from '@/constants/metadata';

export const metadata: Metadata = {
  metadataBase: new URL(META_ONBOARDING.url),
  alternates: {
    canonical: '/',
  },
  title: META_ONBOARDING.title,
  description: META_ONBOARDING.description,
  openGraph: {
    title: META_ONBOARDING.title,
    description: META_ONBOARDING.description,
    siteName: META_ONBOARDING.siteName,
    locale: 'ko_KR',
    type: 'website',
    url: META_ONBOARDING.url,
  },
  twitter: {
    title: META_ONBOARDING.title,
    description: META_ONBOARDING.description,
  },
};

const OnboardingLayout = ({ children }: PropsWithChildren) => {
  return <div className="w-full h-[100dvh] bg-gradient2 pt-[10vh] pb-xs">{children}</div>;
};

export default OnboardingLayout;
