import type { HTMLAttributes } from 'react';
import { forwardRef } from 'react';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

const typographyVariants = cva('', {
  variants: {
    type: {
      heading2: 'font-semibold text-2xl leading-9',
      heading3: 'font-semibold text-4xl leading-12',
      body4: 'font-medium text-sm leading-5',
      body5: 'font-medium text-xs leading-5',
      subLabel2: 'font-semibold text-sm leading-5',
    },
    textColor: {
      white: 'text-[#FFFFFF]',
      gray4: 'text-[#8B939C]',
      gray5: 'text-[#4E5968]',
      gray7: 'text-[#191F28]',
      black: 'text-[#000000]',
    },
  },
  defaultVariants: {
    type: 'heading3',
    textColor: 'gray7',
  },
});

interface TypographyProps extends HTMLAttributes<HTMLParagraphElement>, VariantProps<typeof typographyVariants> {}

const Typography = forwardRef<HTMLParagraphElement, TypographyProps>(
  ({ className, type, textColor, ...props }, ref) => {
    return <p className={typographyVariants({ type, textColor, className })} ref={ref} {...props} />;
  },
);
Typography.displayName = 'Typography';

export default Typography;
