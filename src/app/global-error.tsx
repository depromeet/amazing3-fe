'use client';

import { useEffect } from 'react';
import NextError from 'next/error';

const GlobalError = ({ error }: { error: Error & { digest?: string } }) => {
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') return;
  }, [error]);

  return (
    <html lang="ko-KR">
      <body>
        {/* This is the default Next.js error component but it doesn't allow omitting the statusCode property yet. */}
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        <NextError statusCode={undefined as any} />
      </body>
    </html>
  );
};

export default GlobalError;
