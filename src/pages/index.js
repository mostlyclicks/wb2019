import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ float: `left` }}>
      <h1>Wieser Brother's H1</h1>
      <p>WB intro copy</p>
      <p>Call to action</p>

      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
      <Link to="/page-2/">Go to page 2</Link>
      <br />
      <Link to="/projects/">Go to projects</Link>
    </div>
  </Layout>
)

export default IndexPage
