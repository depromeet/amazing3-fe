import type { PropsWithChildren } from 'react';

import { Typography } from '../typography';

interface TagProps {
  isFocus?: boolean;
}

export const Tag = ({ isFocus = false, children }: PropsWithChildren<TagProps>) => {
  return (
    <div
      className={`flex justify-center items-center w-fit px-3xs py-4xs shadow-thumb rounded-xl ${
        isFocus && 'bg-blue-20'
      }`}
    >
      <Typography type="title3" className={`${!isFocus ? 'text-gray-40' : 'text-blue-50'}`}>
        {children}
      </Typography>
    </div>
  );
};
