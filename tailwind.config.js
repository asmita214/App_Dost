/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Cyber Gradient Theme
        'dark': {
          1: '#0a0a0a',
          2: '#111111', 
          3: '#1a1a1a',
        },
        'primary': {
          cyan: '#00f5ff',
          purple: '#7b61ff',
          pink: '#ff2e63',
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'typewriter': 'typewriter 2s steps(11) forwards',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'gradient-flow': 'gradientFlow 3s ease infinite',
      },
      backgroundImage: {
        'cyber-gradient': 'linear-gradient(135deg, #00f5ff 0%, #7b61ff 50%, #ff2e63 100%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
      },
      backdropBlur: {
        'glass': '20px',
      }
    },
  },
  plugins: [],
}