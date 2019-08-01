import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ProjectsPage = () => (
  <Layout>
    <SEO title="Projects" />
    <h1>Projects Index</h1>
    <p>Wieser Brothers Projects overview paragraph</p>

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

export default ProjectsPage