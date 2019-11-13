import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import ProjectHero from "../components/ProjectHero"
import GridContainer from "../components/GridContainer"



const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <ProjectHero />
      <GridContainer />
      


    </div>
  </Layout>
)

export default IndexPage