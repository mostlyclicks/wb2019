import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from '@reach/router';

import Header from "./header"
import Navigation from "./navigation"
import FooterNav from "./footer"
import "./layout.css"
import "./base-styles.scss"

const Layout = ({ children, path }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      } 
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      {/*} 
      <Navigation />
          <main>{children}</main>
        <FooterNav />

        <footer>
          © {new Date().getFullYear()}, Wieser Brothers General Contractor, Inc.
        </footer>
      */}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
