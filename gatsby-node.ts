import path from 'path'

/* Dependencies */
import type { GatsbyNode, Node } from 'gatsby'
import { createFilePath } from 'gatsby-source-filesystem'
import TsconfigPathsWebpackPlugin from 'tsconfig-paths-webpack-plugin'

interface CustomNodeFields {
  slug: string
}

interface CustomNode extends Node {
  fields: CustomNodeFields
}

interface CommonResult {
  nodes: Array<CustomNode>
}

interface MDXResultData {
  allMdx: CommonResult
}

interface JSONResultData {
  allJson: CommonResult
}

export const createPages: GatsbyNode['createPages'] = async ({
  graphql,
  actions,
}) => {
  const { createPage } = actions

  /* MDX */
  const MDXResult = await graphql<MDXResultData>(`
    query {
      allMdx {
        nodes {
          id
          fields {
            slug
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `)

  if (MDXResult.errors) {
    console.error(MDXResult.errors)
    throw Error(MDXResult.errors)
  }

  /* MDX Templates */
  const privacyPolicyPageTemplate = path.resolve(
    __dirname,
    'src',
    'templates',
    'privacy-policy',
    'index.tsx',
  )

  MDXResult.data?.allMdx.nodes.forEach(node => {
    let template = null
    const path = node.fields.slug

    const slug = node.fields.slug

    if (slug.includes('privacy-policy/')) {
      template = privacyPolicyPageTemplate
    }

    if (template) {
      createPage({
        path,
        component: `${template}?__contentFilePath=${node.internal.contentFilePath}`,
        context: {
          id: node.id,
        },
      })
    }
  })

  /* JSON */
  const JSONResult = await graphql<JSONResultData>(`
    query {
      allJson {
        nodes {
          id
          fields {
            slug
          }
        }
      }
    }
  `)

  if (JSONResult.errors) {
    console.error(JSONResult.errors)
    throw Error(JSONResult.errors)
  }

  /* JSON Templates */
  const homePageTemplate = path.resolve(
    __dirname,
    'src',
    'templates',
    'home',
    'index.tsx',
  )

  JSONResult.data?.allJson.nodes.forEach(node => {
    let template = null
    let path = node.fields.slug

    const slug = node.fields.slug

    if (slug.includes('home/')) {
      template = homePageTemplate
      path = slug.replace('home/', '')
    }

    if (template) {
      createPage({
        path,
        component: template,
        context: {
          id: node.id,
        },
      })
    }
  })
}

export const onCreateNode: GatsbyNode['onCreateNode'] = ({
  node,
  getNode,
  actions,
}) => {
  const { createNodeField } = actions

  if (['Mdx', 'Json'].includes(node.internal.type)) {
    const value = createFilePath({
      node,
      getNode,
    })
    createNodeField({
      node,
      name: 'slug',
      value,
    })
  }
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
