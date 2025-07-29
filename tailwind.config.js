module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        'text-shimmer': 'shimmer 2s infinite linear',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-100% 0' },
          '100%': { backgroundPosition: '100% 0' },
        },
      },
      backgroundSize: {
        shimmer: '200% 100%',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('@tailwindcss/forms'),
  ],
};
