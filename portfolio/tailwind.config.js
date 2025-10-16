/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: { center: true, padding: '1rem' },
    extend: {
      colors: {
        base: {
          50: '#f9fafb', 100: '#f3f4f6', 200: '#e5e7eb',
          700: '#374151', 900: '#111827',
        },
        accent: { 100: '#e0f2fe', 300: '#7dd3fc', 500: '#38bdf8' },
        soft: { rose: '#fce7f3', sky: '#e0f2fe', mint: '#dcfce7' },
      },
      fontFamily: { sans: ['Inter', 'ui-sans-serif', 'system-ui'] },
    },
  },
  plugins: [],
}


