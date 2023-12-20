import type { HTMLAttributes } from 'react';
import { forwardRef } from 'react';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

const typographyVariants = cva('whitespace-pre-line text-wrap', {
  variants: {
    type: {
      heading1: 'font-bold text-[24px] leading-[145%]',
      heading2: 'font-bold text-[20px] leading-[145%]',
      heading3: 'font-bold text-[18px] leading-[155%]',
      heading4: 'font-bold text-[16px] leading-[155%]',
      title1: 'font-semibold text-[20px] leading-[155%]',
      title2: 'font-semibold text-[18px] leading-[155%]',
      title3: 'font-semibold text-[16px] leading-[155%]',
      title4: 'font-semibold text-[14px] leading-[155%]',
      title5: 'font-semibold text-[12px] leading-[155%]',
      body1: 'font-medium text-[18px] leading-[155%]',
      body2: 'font-medium text-[16px] leading-[155%]',
      body3: 'font-medium text-[14px] leading-[155%]',
      subLabel1: 'font-semibold text-[16px] leading-[155%]',
      subLabel2: 'font-semibold text-[14px] leading-[155%]',
      caption1: 'font-medium text-[12px] leading-[155%]',
      caption2: 'font-medium text-[8px] leading-[155%]',
      header1: 'font-insungit font-medium text-14px leading-[145%] text-blue-50',
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
