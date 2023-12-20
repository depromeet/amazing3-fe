import type { HTMLProps, PropsWithChildren } from 'react';

import { Typography } from '../typography';

interface TagProps extends HTMLProps<HTMLLabelElement> {
  isFocus?: boolean;
}

export const Tag = ({ isFocus = false, children, ...props }: PropsWithChildren<TagProps>) => {
  return (
    <label
      className={`flex justify-center items-center w-fit px-3xs py-4xs shadow-thumb rounded-xl cursor-pointer ${
        isFocus ? 'bg-blue-20' : 'bg-white'
      }`}
      {...props}
    >
      <Typography type="title3" className={`${!isFocus ? 'text-gray-40' : 'text-blue-50'}`}>
        {children}
      </Typography>
    </label>
  );
};
