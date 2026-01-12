import React from 'react'

/* Components */
import AboutUsComponent from '@/components/contentful-landing-page/about-us'
import BannerComponent from '@/components/contentful-landing-page/banner'
import FaqComponent from '@/components/contentful-landing-page/faq'
import ServicesComponent from '@/components/contentful-landing-page/services'

/* Config */
import config from '@/config'

/* Generated Contentful */
import type { ContentfulLandingPageQuery } from '@/generated/contentful'

/* Next.js */
import { notFound } from 'next/navigation'

/* Utils */
import contentfulClient from '@/utils/contentful/client'

const contentfulComponentMap = new Map<string, React.ElementType>([
  ['AboutUsComponent', AboutUsComponent],
  ['BannerComponent', BannerComponent],
  ['FaqComponent', FaqComponent],
  ['ServicesComponent', ServicesComponent],
])

const prepareContentfulComponents = (
  data?: NonNullable<
    ContentfulLandingPageQuery['pageCollection']
  >['items'][number],
): Array<React.ReactNode> | undefined => {
  return data?.sectionsCollection?.items.map((section, index) => {
    const typename = section?.content?.__typename ?? ''
    const Component = contentfulComponentMap.get(typename)
    if (Component) {
      return <Component key={`${typename}-${index}`} {...section?.content} />
    }
    return null
  })
}

const LandingPage: React.FC<PageProps<'/[[...pathname]]'>> = async ({
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

  if (!data) {
    notFound()
  }

  return prepareContentfulComponents(data)
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

export default LandingPage
