'use client';

import type { PropsWithChildren } from 'react';
import { m } from 'framer-motion';

const variants = {
  enter: { opacity: 1, x: 0, y: 0 },
  hidden: { opacity: 0, x: -200, y: 0 },
};

export default function Template({ children }: PropsWithChildren) {
  return (
    <m.main
      variants={variants}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: 'spring' }}
    >
      {children}
    </m.main>
  );
}
