import type { HTMLAttributes } from 'react';
import { forwardRef } from 'react';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

const typographyVariants = cva('whitespace-pre-line', {
  variants: {
    type: {
      heading1: 'font-bold text-[24px] leading-[34.8px]',
      title1: 'font-semibold text-[20px] leading-[31px]',
      title3: 'font-semibold text-[16px] leading-[24.8px]',
      title4: 'font-semibold text-[14px] leading-[21.7px]',
      body1: 'font-medium text-[18px] leading-[27.9px]',
      body3: 'font-medium text-[16px] leading-[25.6px]',
      subLabel1: 'font-semibold text-[16px] leading-[25.6px]',
      subLabel2: 'font-semibold text-[14px] leading-[22.4px]',
      caption1: 'font-medium text-[12px] leading-[18.6px]',
    },
  },
  defaultVariants: {
    type: 'body3',
  },
});

interface TypographyProps extends HTMLAttributes<HTMLParagraphElement>, VariantProps<typeof typographyVariants> {}

export const Typography = forwardRef<HTMLParagraphElement, TypographyProps>(({ className, type, ...props }, ref) => {
  return <p className={typographyVariants({ type, className })} ref={ref} {...props} />;
});
Typography.displayName = 'Typography';
