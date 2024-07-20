import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'main-black': '#0D0D0D',
        'main-white': '#FFFFFF',
        'main-onyx': '#181818',
        'main-dark-gray': '#808080',
        'medium-gray': '#80808080',
        'light-gray': '#C5C5C5',
        'light-red': '#e93f406e',
        'light-yellow': '#ffb8006e',
      },
      fontSize: {
        '10-regular': [
          '10px',
          {
            lineHeight: '12px',
            letterSpacing: '1%',
            fontWeight: '400',
          },
        ],
        '10-medium': [
          '10px',
          {
            lineHeight: '12px',
            letterSpacing: '1%',
            fontWeight: '500',
          },
        ],
        '10-semi-bold': [
          '10px',
          {
            lineHeight: '12px',
            letterSpacing: '1%',
            fontWeight: '600',
          },
        ],
        '10-bold': [
          '10px',
          {
            lineHeight: '12px',
            letterSpacing: '1%',
            fontWeight: '700',
          },
        ],
        '11-regular': [
          '11px',
          {
            lineHeight: '13px',
            letterSpacing: '0.5%',
            fontWeight: '400',
          },
        ],
        '11-medium': [
          '11px',
          {
            lineHeight: '13px',
            letterSpacing: '0.5%',
            fontWeight: '500',
          },
        ],
        '11-semi-bold': [
          '11px',
          {
            lineHeight: '13px',
            letterSpacing: '0.5%',
            fontWeight: '600',
          },
        ],
        '11-bold': [
          '11px',
          {
            lineHeight: '13px',
            letterSpacing: '0.5%',
            fontWeight: '700',
          },
        ],
        '12-regular': [
          '12px',
          {
            lineHeight: '15px',
            letterSpacing: '0%',
            fontWeight: '400',
          },
        ],
        '12-medium': [
          '12px',
          {
            lineHeight: '15px',
            letterSpacing: '0%',
            fontWeight: '500',
          },
        ],
        '12-semi-bold': [
          '12px',
          {
            lineHeight: '15px',
            letterSpacing: '0%',
            fontWeight: '600',
          },
        ],
        '12-bold': [
          '12px',
          {
            lineHeight: '15px',
            letterSpacing: '0%',
            fontWeight: '700',
          },
        ],
        '14-regular': [
          '14px',
          {
            lineHeight: '17px',
            letterSpacing: '-0.6%',
            fontWeight: '400',
          },
        ],
        '14-medium': [
          '14px',
          {
            lineHeight: '17px',
            letterSpacing: '-0.6%',
            fontWeight: '500',
          },
        ],
        '14-semi-bold': [
          '14px',
          {
            lineHeight: '17px',
            letterSpacing: '-0.6%',
            fontWeight: '600',
          },
        ],
        '14-bold': [
          '14px',
          {
            lineHeight: '17px',
            letterSpacing: '-0.6%',
            fontWeight: '700',
          },
        ],
        '15-regular': [
          '15px',
          {
            lineHeight: '18px',
            letterSpacing: '-0.9%',
            fontWeight: '400',
          },
        ],
        '15-medium': [
          '15px',
          {
            lineHeight: '18px',
            letterSpacing: '-0.9%',
            fontWeight: '500',
          },
        ],
        '15-semi-bold': [
          '15px',
          {
            lineHeight: '18px',
            letterSpacing: '-0.9%',
            fontWeight: '600',
          },
        ],
        '15-bold': [
          '15px',
          {
            lineHeight: '18px',
            letterSpacing: '-0.9%',
            fontWeight: '700',
          },
        ],
        '16-regular': [
          '16px',
          {
            lineHeight: '19px',
            letterSpacing: '0%',
            fontWeight: '400',
          },
        ],
        '16-medium': [
          '16px',
          {
            lineHeight: '19px',
            letterSpacing: '0%',
            fontWeight: '500',
          },
        ],
        '16-semi-bold': [
          '16px',
          {
            lineHeight: '19px',
            letterSpacing: '0%',
            fontWeight: '600',
          },
        ],
        '16-bold': [
          '16px',
          {
            lineHeight: '19px',
            letterSpacing: '0%',
            fontWeight: '700',
          },
        ],
        '18-regular': [
          '18px',
          {
            lineHeight: '22px',
            letterSpacing: '-1.4%',
            fontWeight: '400',
          },
        ],
        '18-medium': [
          '18px',
          {
            lineHeight: '22px',
            letterSpacing: '-1.4%',
            fontWeight: '500',
          },
        ],
        '18-semi-bold': [
          '18px',
          {
            lineHeight: '22px',
            letterSpacing: '-1.4%',
            fontWeight: '600',
          },
        ],
        '18-bold': [
          '18px',
          {
            lineHeight: '22px',
            letterSpacing: '-1.4%',
            fontWeight: '700',
          },
        ],
        '20-regular': [
          '20px',
          {
            lineHeight: '24px',
            letterSpacing: '-1.7%',
            fontWeight: '400',
          },
        ],
        '20-medium': [
          '20px',
          {
            lineHeight: '24px',
            letterSpacing: '-1.7%',
            fontWeight: '500',
          },
        ],
        '20-semi-bold': [
          '20px',
          {
            lineHeight: '24px',
            letterSpacing: '-1.7%',
            fontWeight: '600',
          },
        ],
        '20-bold': [
          '20px',
          {
            lineHeight: '24px',
            letterSpacing: '-1.7%',
            fontWeight: '700',
          },
        ],
        '24-regular': [
          '24px',
          {
            lineHeight: '29px',
            letterSpacing: '-1.9%',
            fontWeight: '400',
          },
        ],
        '24-medium': [
          '24px',
          {
            lineHeight: '29px',
            letterSpacing: '-1.9%',
            fontWeight: '500',
          },
        ],
        '24-semi-bold': [
          '24px',
          {
            lineHeight: '29px',
            letterSpacing: '-1.9%',
            fontWeight: '600',
          },
        ],
        '24-bold': [
          '24px',
          {
            lineHeight: '29px',
            letterSpacing: '-1.9%',
            fontWeight: '700',
          },
        ],
        '32-regular': [
          '32px',
          {
            lineHeight: '39px',
            letterSpacing: '-2.1%',
            fontWeight: '400',
          },
        ],
        '32-medium': [
          '32px',
          {
            lineHeight: '39px',
            letterSpacing: '-2.1%',
            fontWeight: '500',
          },
        ],
        '32-semi-bold': [
          '32px',
          {
            lineHeight: '39px',
            letterSpacing: '-2.1%',
            fontWeight: '600',
          },
        ],
        '32-bold': [
          '32px',
          {
            lineHeight: '39px',
            letterSpacing: '-2.1%',
            fontWeight: '700',
          },
        ],
        '40-regular': [
          '40px',
          {
            lineHeight: '48px',
            letterSpacing: '-2.1%',
            fontWeight: '400',
          },
        ],
        '40-medium': [
          '40px',
          {
            lineHeight: '48px',
            letterSpacing: '-2.1%',
            fontWeight: '500',
          },
        ],
        '40-semi-bold': [
          '40px',
          {
            lineHeight: '48px',
            letterSpacing: '-2.1%',
            fontWeight: '600',
          },
        ],
        '40-bold': [
          '40px',
          {
            lineHeight: '48px',
            letterSpacing: '-2.1%',
            fontWeight: '700',
          },
        ],
        '48-regular': [
          '48px',
          {
            lineHeight: '58px',
            letterSpacing: '-2.1%',
            fontWeight: '400',
          },
        ],
        '48-medium': [
          '48px',
          {
            lineHeight: '58px',
            letterSpacing: '-2.1%',
            fontWeight: '500',
          },
        ],
        '48-semi-bold': [
          '48px',
          {
            lineHeight: '58px',
            letterSpacing: '-2.1%',
            fontWeight: '600',
          },
        ],
        '48-bold': [
          '48px',
          {
            lineHeight: '58px',
            letterSpacing: '-2.1%',
            fontWeight: '700',
          },
        ],
        '60-regular': [
          '60px',
          {
            lineHeight: '73px',
            letterSpacing: '-2.1%',
            fontWeight: '400',
          },
        ],
        '60-medium': [
          '60px',
          {
            lineHeight: '73px',
            letterSpacing: '-2.1%',
            fontWeight: '500',
          },
        ],
        '60-semi-bold': [
          '60px',
          {
            lineHeight: '73px',
            letterSpacing: '-2.1%',
            fontWeight: '600',
          },
        ],
        '60-bold': [
          '60px',
          {
            lineHeight: '73px',
            letterSpacing: '-2.1%',
            fontWeight: '700',
          },
        ],
        '80-regular': [
          '80px',
          {
            lineHeight: '80px',
            letterSpacing: '-2.1%',
            fontWeight: '400',
          },
        ],
        '80-medium': [
          '80px',
          {
            lineHeight: '80px',
            letterSpacing: '-2.1%',
            fontWeight: '500',
          },
        ],
        '80-semi-bold': [
          '80px',
          {
            lineHeight: '80px',
            letterSpacing: '-2.1%',
            fontWeight: '600',
          },
        ],
        '80-bold': [
          '80px',
          {
            lineHeight: '80px',
            letterSpacing: '-2.1%',
            fontWeight: '700',
          },
        ],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
