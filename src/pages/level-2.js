import React from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectHero from "../components/L2Hero"
import Mission from "../components/Home/Mission"


const LevelTwo = () => (
  <Layout>
    <SEO title="Level 2" />
    <div>
      <ProjectHero />
      <h1>Level 2</h1>
      <p>body</p>


      <Mission />
    </div>
  </Layout>
)

export default LevelTwo