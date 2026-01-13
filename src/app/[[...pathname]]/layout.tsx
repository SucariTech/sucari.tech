import React from 'react'

/* Config */
import config from '@/config'

/* Layout */
import SiteLayout from '@/layout'

/* Next.js */
import type { Metadata } from 'next'

/* Utils */
import { getDomainName } from '@/utils'
import contentfulClient from '@/utils/contentful/client'

export const generateMetadata = async ({
  params,
}: LayoutProps<'/[[...pathname]]'>): Promise<Metadata> => {
  const pathnameParam = (await params).pathname
  const pathname = pathnameParam?.length
    ? '/' + pathnameParam?.join('/') + '/'
    : '/'

  const result = await contentfulClient.ContentfulLandingPage({
    languageCode: config.languageCode,
    pathname,
  })

  const data = result.pageCollection?.items[0]

  const description = data?.metadata?.description
  const openGraphImageSource = data?.metadata?.openGraphImage?.url ?? undefined
  const pageTitle = data?.metadata?.title
  const twitterUsername = data?.metadata?.twitterUsername ?? undefined

  const shouldPreventIndexing =
    !config.languageCode ||
    (config.languageCode !== 'en' &&
      !config.deployedTranslations.find(
        ({ code }) => code === config.languageCode,
      ))

  const title = pageTitle?.length
    ? `${pageTitle} | ${config.name}`
    : config.name

  return {
    alternates: {
      canonical: new URL(
        `https://${getDomainName(config.languageCode)}${pathname}`,
      ),
      languages: config.deployedTranslations.reduce(
        (previousValue, currentValue) => ({
          ...previousValue,
          [currentValue.code]: new URL(
            `https://${getDomainName(currentValue.code)}${pathname}`,
          ),
        }),
        {
          'x-default': new URL(`https://${getDomainName('en')}${pathname}`),
        },
      ),
    },
    description,
    openGraph: {
      images: openGraphImageSource,
      siteName: config.name,
      title,
      type: 'website',
      url: new URL(`https://${getDomainName(config.languageCode)}${pathname}`),
    },
    other: {
      google: 'notranslate',
      ...(shouldPreventIndexing && {
        robots: 'noindex',
      }),
    },
    title,
    twitter: {
      card: 'summary_large_image',
      creator: twitterUsername,
      images: openGraphImageSource,
      site: twitterUsername,
      title,
    },
  }
}

const Layout: React.FC<LayoutProps<'/[[...pathname]]'>> = async ({
  children,
  params,
}) => {
  const pathnameParam = (await params).pathname
  const pathname = pathnameParam?.length
    ? '/' + pathnameParam?.join('/') + '/'
    : '/'

  const result = await contentfulClient.ContentfulLandingPage({
    languageCode: config.languageCode,
    pathname,
  })

  const data = result.pageCollection?.items[0]

  return (
    <SiteLayout
      footerMenuContent={data?.footerMenu}
      navigationMenuContent={data?.navigationMenu}
    >
      {children}
    </SiteLayout>
  )
}

export const generateStaticParams = async () => {
  const result = await contentfulClient.ContentfulPages({
    languageCode: config.languageCode,
  })

  const params: Array<{
    pathname?: RegExpMatchArray
  }> = []

  result.pageCollection?.items.forEach(item => {
    if (item?.pathname) {
      params.push({
        pathname: item.pathname.match(/[^/]+/g) ?? undefined,
      })
    }
  })

  return params
}

export default Layout
