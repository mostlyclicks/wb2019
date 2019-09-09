const path = require(`path`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const empOpsTemplate = path.resolve(`src/templates/empOps.js`)
  const projectsTemplate = path.resolve(`src/templates/projects.js`)
  const pageTemplate = path.resolve(`src/templates/page.js`)

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
    allContentfulProjects {
      edges {
        node {
          title
          slug
        }
      }
    }
    allContentfulPages {
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

    //Create Employment pages
    result.data.allContentfulEmploymentOpportunities.edges.forEach(edge => {
      createPage({
        path: `/employment-opportunities/${edge.node.slug}`,
        component: empOpsTemplate,
        context: {
          slug: edge.node.slug,
        },
      })
    })

    //Create Project pages
    result.data.allContentfulProjects.edges.forEach(edge => {
      createPage({
        path: `/projects/${edge.node.slug}`,
        component: projectsTemplate,
        context: {
          slug: edge.node.slug,
        },
      })
    })

    //create Pages
    result.data.allContentfulPages.edges.forEach(edge => {
      createPage({
        path: `/pages/$/edge.node.slug`,
        component: pageTemplate,
        context: {
          slug: edge.node.slug,
        },
      })
    })
  })
}