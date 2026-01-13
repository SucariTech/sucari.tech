/* Config */
import config from '@/config'

/* Next.js */
import type { MetadataRoute } from 'next'

/* Utils */
import { getDomainName } from '@/utils'

const robots = (): MetadataRoute.Robots => {
  return {
    rules: {
      userAgent: '*',
    },
    host: `https://${getDomainName(config.languageCode)}`,
    sitemap: `https://${getDomainName(config.languageCode)}/sitemap.xml`,
  }
}

export default robots
