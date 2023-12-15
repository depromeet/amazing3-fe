import type { Config } from 'tailwindcss';

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
      colors: {
        gray: {
          7: '#232C39',
          6: '#333D4B',
          5: '#4E5968',
          4: '#8490A0',
          3: '#C2C9D0',
          2: '#EFF1F3',
          1: '#F7F8FA',
        },
        purple: {
          8: '#4B25B5',
          4: '#855AFF',
          3: '#B69CFF',
          2: '#E7DEFF',
          1: '#F3EEFF',
        },
        red: {
          6: '#F63C3C',
          5: '#FF5353',
          3: '#FF6F6F',
          2: '#FFECEC',
          1: '#FFF6F6',
        },
        blue: {
          6: '#003EB3',
          5: '#435FD0',
          '5-1': '#1677FF',
          3: '#69B1FF',
          2: '#BAE0FF',
          1: '#E6F4FF',
        },
      },
      spacing: {
        none: '0px',
        '7xs': '2px',
        '6xs': '4px',
        '5xs': '8px',
        '4xs': '12px',
        '3xs': '16px',
        '2xs': '20px',
        xs: '24px',
        sm: '32px',
        md: '40px',
        lg: '48px',
        xl: '56px',
        '2xl': '64px',
        '3xl': '72px',
        '4xl': '80px',
        '5xl': '104px',
        '6xl': '120px',
      },
      borderRadius: {
        none: '0px',
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '120px',
      },
    },
  },
  plugins: [],
};
export default config;
