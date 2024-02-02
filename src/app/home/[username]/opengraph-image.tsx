import { ImageResponse } from 'next/og';

import { OG_IMAGE_SIZE } from '@/constants';

import type { HomeRouteParams } from './page';

export const runtime = 'edge';

export const OgImage = async ({ params: { username } }: HomeRouteParams) => {
  return new ImageResponse(
    (
      <div
        style={{
          position: 'relative',
          backgroundImage: "url('/opengraph-image-lifeMap.png')",
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          width: '100%',
          height: '100%',
        }}
      >
        <p
          style={{
            position: 'relative',
            top: '254px',
            textAlign: 'center',
            fontSize: '36px',
            fontWeight: '600',
          }}
        >
          @ {username}
        </p>
      </div>
    ),
    OG_IMAGE_SIZE,
  );
};
