import React from "react"
import { graphql } from 'gatsby'
import { Link } from 'gatsby'

const EmpOpsPage = ({data: { allContentfulEmploymentOpportunities }}) => (
  <div>
    <h1>Employment Opportunities</h1>
    <ul>
        {allContentfulEmploymentOpportunities.edges.map(({ node }) => (
          <li><Link to={"employment-opportunities/" + node.slug}>{node.title}</Link></li>
        ))}
    </ul>
  </div>
)

export const query = graphql`
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
`
export default EmpOpsPage