/* Config */
import config from '@/config'

/* Next.js */
import type { MetadataRoute } from 'next'

const manifest = (): MetadataRoute.Manifest => ({
  name: config.name,
  short_name: config.name?.replace(/[\s]/g, '') ?? '',
  icons: [
    {
      src: '/favicons/android-chrome-192x192.png',
      sizes: '192x192',
      type: 'image/png',
    },
    {
      src: '/favicons/android-chrome-384x384.png',
      sizes: '384x384',
      type: 'image/png',
    },
  ],
  theme_color: '#ffffff',
  background_color: '#ffffff',
  display: 'standalone',
})

export default manifest
