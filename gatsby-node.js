const path = require(`path`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const empOpsTemplate = path.resolve(`src/templates/empOps.js`)
  return graphql(`
    {
      allContentfulEmploymentOpportunities {
        edges {
          node {
            title
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

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const projectsTemplate = path.resolve(`src/templates/projects.js`)
  return graphql(`
    {
      allContentfulProjects {
        edges {
          node {
            title
            slug
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }
    result.data.allContentfulProjects.edges.forEach(edge => {
      createPage({
        path: `/projects/${edge.node.slug}`,
        component: projectsTemplate,
        context: {
          slug: edge.node.slug,
        },
      })
    })
  })
}