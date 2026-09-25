/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: '#F5F8F7',
        ink: '#0D1F1B',
        'teal-700': '#0B5F58',
        'teal-300': '#9FDCD1',
        rust: '#C1502B',
        slate: '#4E5F5B',
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'sans-serif'],
        body: ['"IBM Plex Sans"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      borderRadius: {
        DEFAULT: '4px',
        sm: '2px',
        md: '4px',
        lg: '4px',
      },
      maxWidth: {
        'content': '1200px',
      }
    },
  },
  plugins: [],
}
