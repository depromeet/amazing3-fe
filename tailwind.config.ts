import type { Config } from 'tailwindcss';

import { backgroundImage, borderRadius, boxShadow, colors, spacing } from './styles/theme';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors,
      spacing,
      borderRadius,
      backgroundImage,
      boxShadow,
      fontFamily: {
        pretendard: ['var(--font-pretendard)'],
        insungit: ['var(--font-insungIt)'],
      },
    },
    screens: {
      375: { max: '375px' },
      390: { max: '390px' },
    },
  },

  plugins: [],
};
export default config;
