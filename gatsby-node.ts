import path from 'path'

/* Dependencies */
import type { GatsbyNode } from 'gatsby'
import TsconfigPathsWebpackPlugin from 'tsconfig-paths-webpack-plugin'

export const createPages: GatsbyNode['createPages'] = async ({
  graphql,
  actions,
}) => {
  const { createPage } = actions
  const languageCode = process.env.GATSBY_LANGUAGE_CODE ?? 'en'

  /* Contentful Pages */
  const contentfulPagesResult = await graphql<
    Queries.ContentfulPagesQuery,
    Queries.ContentfulPagesQueryVariables
  >(
    `
      query ContentfulPages($languageCode: String) {
        allContentfulPage(filter: { node_locale: { eq: $languageCode } }) {
          nodes {
            id
            slug
          }
        }
      }
    `,
    {
      languageCode,
    },
  )

  if (contentfulPagesResult.errors) {
    console.error(contentfulPagesResult.errors)
    throw Error(contentfulPagesResult.errors)
  }

  /* Landing Page Template */
  const landingPageTemplate = path.resolve(
    __dirname,
    'src',
    'templates',
    'landing-page',
    'index.tsx',
  )

  contentfulPagesResult.data?.allContentfulPage.nodes.forEach(node => {
    let template: string | null = null
    let path: string | null = null

    if (node.slug === 'home') {
      template = landingPageTemplate
      path = '/'
    }

    if (template && path) {
      createPage({
        path,
        component: template,
        context: {
          id: node.id,
        },
      })
    }
  })

  /* Contentful Rich Text Pages */
  const contentfulRichTextPagesResult = await graphql<
    Queries.ContentfulRichTextPagesQuery,
    Queries.ContentfulRichTextPagesQueryVariables
  >(
    `
      query ContentfulRichTextPages($languageCode: String) {
        allContentfulRichTextPage(
          filter: { node_locale: { eq: $languageCode } }
        ) {
          nodes {
            id
            slug
          }
        }
      }
    `,
    {
      languageCode,
    },
  )

  if (contentfulRichTextPagesResult.errors) {
    console.error(contentfulRichTextPagesResult.errors)
    throw Error(contentfulRichTextPagesResult.errors)
  }

  /* Contentful Rich Text Page Template */
  const contentfulRichTextPageTemplate = path.resolve(
    __dirname,
    'src',
    'templates',
    'contentful-rich-text-page',
    'index.tsx',
  )

  contentfulRichTextPagesResult.data?.allContentfulRichTextPage.nodes.forEach(
    node => {
      const template = contentfulRichTextPageTemplate
      const path = node.slug

      if (path) {
        createPage({
          path,
          component: template,
          context: {
            id: node.id,
          },
        })
      }
    },
  )
}

export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = ({
  actions,
}) => {
  actions.setWebpackConfig({
    resolve: {
      plugins: [new TsconfigPathsWebpackPlugin()],
    },
  })
}
