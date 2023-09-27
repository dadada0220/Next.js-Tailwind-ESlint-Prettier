import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  plugins: [
    require('@tailwindcss/forms'),
    function ({ addUtilities }) {
      const newUtilities = {
        '.flex-0': {
          flex: '0 0 auto',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
  theme: {
    extend: {
      /**
       * カラーを定義
       * ※Tailwindデフォルトカラーは使用しないで、ここで定義されたカラーのみ使用する
       * @example
       * `DEFAULT`：`text-base`や`text-alert`で呼び出す
       * それ以外：`text-base-500`や`text-alert-bg`で呼び出す
       */
      colors: {
        alert: {
          bg: '#FFEBEE',
          DEFAULT: '#C62828',
        },
        theme: {
          100: '#F5F5F5',
          // 200: '#E8E8E8',
          300: '#BBB',
          // 400: '#777',
          500: '#444',
          DEFAULT: '#272727',
        },
      },
    },
  },
};
export default config;
