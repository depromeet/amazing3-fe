import type { SVGProps } from 'react';

export const CheckIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.569 11.5114C24.0672 12.0096 24.0672 12.8175 23.569 13.3157L15.0632 21.8215C14.565 22.3197 13.7572 22.3197 13.2589 21.8215L9.43131 17.9939C8.93305 17.4956 8.93305 16.6878 9.43131 16.1895C9.92956 15.6913 10.7374 15.6913 11.2357 16.1895L14.1611 19.115L21.7646 11.5114C22.2629 11.0131 23.0707 11.0131 23.569 11.5114Z"
      />
    </svg>
  );
};
CheckIcon.displayName = 'CheckIcon';
