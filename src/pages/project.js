import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ProjectPage = () => (
  <Layout>
    <SEO title="Project Page" />
    <h1>Project Name - Location</h1>
    <p>Project summary</p>

    <h2>Our Involvement</h2>
    <p>Services rendered using keywords with links back to main services pages. Mention of location, city or target market.</p>

    <p><i>Images: Servies Rendered - Project Name - Location - Detail</i></p>

    <blockquote>Testimonial</blockquote>
    <button>Call to Action</button>
  </Layout>
)

export default ProjectPage