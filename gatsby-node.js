const path = require(`path`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const empOpsTemplate = path.resolve(`src/templates/empOps.js`)
  return graphql(`
    {
      allContentfulEmploymentOpportunities {
        edges {
          node {
            slug
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }
    result.data.allContentfulEmploymentOpportunities.edges.forEach(edge => {
      createPage({
        path: `/employment-opportunities/${edge.node.slug}`,
        component: empOpsTemplate,
        context: {
          slug: edge.node.slug,
        },
      })
    })
  })
}