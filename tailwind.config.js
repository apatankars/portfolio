/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-green': '#00ff00',
        'neon-cyan': '#00ffff',
        'neon-pink': '#ff00ff',
        'neon-purple': '#9d00ff',
        'terminal-black': '#0a0a0a',
        'terminal-gray': '#1a1a1a',
      },
      fontFamily: {
        mono: ['"Fira Code"', 'monospace'], // We'll need to import Fira Code or similar
      },
      animation: {
        'blink': 'blink 1s step-end infinite',
        'scanline': 'scanline 8s linear infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        }
      }
    },
  },
  plugins: [],
}
