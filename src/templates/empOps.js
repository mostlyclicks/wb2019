import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

function EmploymentOpportunity({ data }) {
  return (
    <Layout>
      <h2>{data.contentfulEmploymentOpportunities.title} Yo</h2>
    </Layout>
  )
}

export const query = graphql`
  query employmentOpportunity($slug: String!) {
    contentfulEmploymentOpportunities(slug: { eq: $slug }) {
      title
    }
  }
`
export default EmploymentOpportunity