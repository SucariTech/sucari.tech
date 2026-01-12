/* Config */
import config from '@/config'

/* Next.js */
import type { MetadataRoute } from 'next'

/* Utils */
import { getDomainName } from '@/utils'
import contentfulClient from '@/utils/contentful/client'

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const result = await contentfulClient.ContentfulPages({
    languageCode: config.languageCode,
  })

  const value: MetadataRoute.Sitemap = []

  result.pageCollection?.items.forEach(item => {
    if (item?.pathname) {
      value.push({
        lastModified: item.sys.publishedAt ?? undefined,
        url: new URL(
          `https://${getDomainName(config.languageCode)}${item.pathname}`,
        ).toString(),
        alternates: {
          languages: config.deployedTranslations.reduce(
            (previousValue, currentValue) => ({
              ...previousValue,
              [currentValue.code]: new URL(
                `https://${getDomainName(currentValue.code)}${item.pathname}`,
              ).toString(),
            }),
            {
              'x-default': new URL(
                `https://${getDomainName('en')}${item.pathname}`,
              ).toString(),
            },
          ),
        },
      })
    }
  })

  return value
}

export default sitemap
