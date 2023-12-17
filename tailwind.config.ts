import type { Config } from 'tailwindcss';

import { backgroundImage, borderRadius, boxShadow, colors, spacing } from './styles/theme';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
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
      boxShadow,
    },
  },
  plugins: [],
};
export default config;
