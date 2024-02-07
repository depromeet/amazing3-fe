/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from 'next/og';

import type { HomeRouteParams } from './page';

export const runtime = 'edge';
export const contentType = 'image/png';
export const alt = '인생지도 공유';
export const size = {
  width: 1200,
  height: 630,
};

const OGImage = async ({ params: { username } }: HomeRouteParams) => {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '630px',
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <img
          src="https://github.com/depromeet/amazing3-fe/assets/112946860/7a8b32bd-fd97-4a32-91a8-7c6d151c6c91"
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            width: '100%',
            objectFit: 'cover',
          }}
          alt="ogImage"
        />
        <p
          style={{
            position: 'absolute',
            top: '254px',
            fontSize: '36px',
            fontWeight: '600',
            color: 'white',
          }}
        >
          @ {username}
        </p>
      </div>
    ),
  );
};

export default OGImage;
