import type { Config } from 'tailwindcss';

import { backgroundImage, borderRadius, colors, spacing } from './styles/theme';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      pretendard: ['Pretendard'],
      insungit: ['InsungIt'],
    },
    extend: {
      colors,
      spacing,
      borderRadius,
      backgroundImage,
      boxShadow: {
        input: '0px 0px 7.9px 0px  rgba(0, 88, 255, 0.10)',
      },
    },
  },
  plugins: [],
};
export default config;
