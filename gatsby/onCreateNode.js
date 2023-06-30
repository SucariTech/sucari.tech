const { createFilePath } = require('gatsby-source-filesystem')

module.exports = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (['Mdx', 'Json'].includes(node.internal.type)) {
    const value = createFilePath({
      node,
      getNode
    })
    createNodeField({
      node,
      name: 'slug',
      value
    })
  }
}
