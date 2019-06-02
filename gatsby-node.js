const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return graphql(`
    {
      allMarkdownRemark(sort: {order: ASC, fields: fields___slug}) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    const pages = result.data.allMarkdownRemark.edges;
    pages.forEach(({ node }, index) => {
      const previous = index === 0 || index === pages.length -1 ? null : pages[index - 1].node;
      const next = index >= pages.length - 2 ? null : pages[index + 1].node;
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/image-page-template.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: node.fields.slug,
          previous,
          next,
          order: index
        },
      });
    })
  })
}
