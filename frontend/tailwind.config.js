export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': 'rgb(15, 23, 42)',
        'bg-secondary': 'rgb(30, 41, 59)',
        'bg-tertiary': 'rgb(51, 65, 85)',
        'text-primary': 'rgb(244, 244, 245)',
        'text-muted': 'rgb(161, 161, 170)',
        'border': 'rgb(63, 63, 70)',
      },
    },
  },
  plugins: [],
}
