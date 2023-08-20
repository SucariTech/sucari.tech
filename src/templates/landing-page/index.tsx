import React from 'react'

/* Components */
import BannerSection from '@components/landing-page/sections/banner'
import AboutUsSection from '@components/landing-page/sections/about-us'

/* Gatsby */
import { graphql } from 'gatsby'
import type { HeadProps, PageProps } from 'gatsby'

/* Head */
import SiteHead from '@head'

/* Layout */
import Layout from '@layout'

const contentfulComponentMap = new Map<string, React.ElementType>([
  ['ContentfulBannerComponent', BannerSection],
  ['ContentfulAboutUsComponent', AboutUsSection],
])

const prepareContentfulComponents = (
  data: Queries.LandingPageQuery,
): Array<React.ReactNode> | undefined => {
  return data.contentfulPage?.sections?.map((section, index) => {
    const typename = section?.content?.__typename ?? ''
    const Component = contentfulComponentMap.get(typename)
    if (Component) {
      return <Component key={`${typename}-${index}`} {...section?.content} />
    }
    return null
  })
}

export const Head: React.FC<HeadProps<Queries.LandingPageQuery>> = ({
  data,
  location,
}) => (
  <SiteHead
    description={data.contentfulPage?.metadata?.description}
    location={location}
    openGraphImageSource={data.contentfulPage?.metadata?.openGraphImage?.url}
    title={data.contentfulPage?.metadata?.title}
    twitterUsername={data.contentfulPage?.metadata?.twitterUsername}
  />
)

const LandingPageTemplate: React.FC<PageProps<Queries.LandingPageQuery>> = ({
  data,
}) => (
  <Layout
    footerMenuContent={data.contentfulPage?.footerMenu}
    navigationMenuContent={data.contentfulPage?.navigationMenu}
  >
    {prepareContentfulComponents(data)}
  </Layout>
)

export const query = graphql`
  query LandingPage($id: String!) {
    contentfulPage(id: { eq: $id }) {
      name
      metadata {
        title
        description
        openGraphImage {
          url
        }
        twitterUsername
      }
      navigationMenu {
        ...ContentfulNavigationMenuContent
      }
      sections {
        content {
          __typename
          ...ContentfulBannerComponentContent
          ...ContentfulAboutUsComponentContent
        }
      }
      footerMenu {
        ...ContentfulFooterMenuContent
      }
    }
  }
`

export default LandingPageTemplate
