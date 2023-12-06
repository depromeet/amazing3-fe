import type { HTMLAttributes } from 'react';
import { forwardRef } from 'react';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

const paragraphVariants = cva('', {
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

interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement>, VariantProps<typeof paragraphVariants> {}

const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(({ className, type, textColor, ...props }, ref) => {
  return <p className={paragraphVariants({ type, textColor, className })} ref={ref} {...props} />;
});
Paragraph.displayName = 'Paragraph';

export default Paragraph;
