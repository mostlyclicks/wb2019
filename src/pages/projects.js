import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"

const ProjectsPage = ({data: { allContentfulProjectCategories }}) => (
  <Layout>
    <SEO title="Projects" />
    <h1>Projects Index</h1>
    <p>Wieser Brothers Projects overview paragraph</p>

    <h3>From Contentful TEST</h3>
    <ul>
      {allContentfulProjectCategories.edges.map(({ node }) => (
        <li>{node.title} {node.slug}</li>
      ))}
    </ul>
    
    <small><em>WORKING LIST based on current categories</em></small>
    <ul>
      <li>Cold Storage & Warehousing</li>
      <li>Community & Worship</li>
      <li>Educational</li>
      <li>Financial</li>
      <li>Food Processsing</li>
      <li>Healthcare</li>
      <li>Lodging & Multi-Dwelling</li>
      <li>Manufacturing</li>
      <li>Office Space</li>
      <li>Restaurants</li>
      <li>Retail</li>
    </ul>
  </Layout>
)

export const query = graphql`
{
  allContentfulProjectCategories {
    edges {
      node {
        title
      }
    }
  }
}
`

export default ProjectsPage