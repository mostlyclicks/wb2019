import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import MainNavigation from "./MainNavigation"
// import Navigation from "./navigation"
// import FooterNav from "./footer"
import "./layout.css"
// import { BaseStyle } from "./base-styles"

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

  

      {/* HERO */}

      {/* PROJECT HERO in index.js */}
      <main>{children}</main>
      {/*}
       
      <Navigation />
          
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
