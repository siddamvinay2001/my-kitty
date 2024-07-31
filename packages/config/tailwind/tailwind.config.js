export default {
  content: [
    '../../packages/ui/src/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {}
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer')
  ]
}