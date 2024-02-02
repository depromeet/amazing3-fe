import type { Metadata } from 'next';

import { META } from '@/constants';

interface generateMetadataProps {
  title?: string;
  description?: string;
  asPath?: string;
  ogImage?: string;
}

export const getMetadata = (seoProps?: generateMetadataProps) => {
  const { title, description, asPath, ogImage } = seoProps || {};

  const TITLE = title ? `${title} | 반디부디` : META.title;
  const DESCRIPTION = description || META.description;
  const PAGE_URL = asPath ? META.url + asPath : META.url;
  const OG_IMAGE = ogImage || META.ogImage;

  const metadata: Metadata = {
    metadataBase: new URL(PAGE_URL),
    alternates: {
      canonical: PAGE_URL,
    },
    title: TITLE,
    description: DESCRIPTION,
    keywords: [...META.keyword],
    openGraph: {
      title: TITLE,
      description: DESCRIPTION,
      siteName: META.siteName,
      locale: 'ko_KR',
      type: 'website',
      url: META.url,
      images: {
        url: OG_IMAGE,
      },
    },
    verification: {
      google: META.googleVerification,
      other: {
        'naver-site-verification': META.naverVerification,
      },
    },
    twitter: {
      title: TITLE,
      description: DESCRIPTION,
      images: {
        url: OG_IMAGE,
      },
    },
  };

  return metadata;
};
