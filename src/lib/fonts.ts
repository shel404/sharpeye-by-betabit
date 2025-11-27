import localFont from 'next/font/local'

export const syne = localFont({
  src: '../../public/fonts/syne/syne-variable.woff2',
  variable: '--font-syne-family',
  weight: '400 800',
  display: 'swap',
  fallback: ['system-ui', 'sans-serif'],
})

export const inter = localFont({
  src: [
    {
      path: '../../public/fonts/inter/inter-400.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/inter/inter-700.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-inter-family',
  display: 'swap',
  fallback: ['Arial', 'sans-serif'],
})

export const satoshi = inter // Using Inter as fallback for Satoshi for now

