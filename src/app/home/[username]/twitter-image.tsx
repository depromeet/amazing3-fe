import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const contentType = 'image/png';

export const size = {
  width: 1200,
  height: 630,
};

export default async function Image({ params }: { params: { username: string } }) {
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
          @ {params.username}
        </p>
      </div>
    ),
    {
      ...size,
    },
  );
}
