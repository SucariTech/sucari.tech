import React from 'react'

/* Components */
import ContentfulRichTextHyperlink from '@components/contentful-rich-text-hyperlink'

/* Contentful */
import { INLINES } from '@contentful/rich-text-types'

/* Gatsby */
import { graphql } from 'gatsby'
import type { HeadProps, PageProps } from 'gatsby'

/* Gatsby Source Contentful */
import { renderRichText } from 'gatsby-source-contentful/rich-text'

/* Head */
import SiteHead from '@head'

/* Layout */
import Layout from '@layout'

/* MUI */
import Box from '@mui/material/Box'

export const Head: React.FC<HeadProps<Queries.RichTextPageQuery>> = ({
  data,
  location,
}) => (
  <SiteHead
    description={data.contentfulRichTextPage?.metadata?.description}
    location={location}
    openGraphImageSource={
      data.contentfulRichTextPage?.metadata?.openGraphImage?.url
    }
    title={data.contentfulRichTextPage?.metadata?.title}
    twitterUsername={data.contentfulRichTextPage?.metadata?.twitterUsername}
  />
)

const ContentfulRichTextPageTemplate: React.FC<
  PageProps<Queries.RichTextPageQuery>
> = ({ data }) => (
  <Layout
    footerMenuContent={data.contentfulRichTextPage?.footerMenu}
    navigationMenuContent={data.contentfulRichTextPage?.navigationMenu}
  >
    {data.contentfulRichTextPage?.body && (
      <Box component="section" px={3} py={1}>
        <Box maxWidth="lg" mx="auto" width="100%">
          {renderRichText(data.contentfulRichTextPage.body, {
            renderNode: {
              [INLINES.HYPERLINK]: (node, children) => (
                <ContentfulRichTextHyperlink color="secondary" node={node}>
                  {children}
                </ContentfulRichTextHyperlink>
              ),
            },
          })}
        </Box>
      </Box>
    )}
  </Layout>
)

export const query = graphql`
  query RichTextPage($id: String!) {
    contentfulRichTextPage(id: { eq: $id }) {
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
      body {
        raw
      }
      footerMenu {
        ...ContentfulFooterMenuContent
      }
    }
  }
`

export default ContentfulRichTextPageTemplate
