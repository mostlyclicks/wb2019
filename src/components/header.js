import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const HeaderWrapper = styled.div`
  background-color:#00573c;
  
    @media all and (max-width: 768px) {
      height:70px;
    }
    @media all and (max-width: 991px) {
      height:100px;
    }

    height:200px;

  
  
`
const HeaderLink = styled(props => <Link {...props} />)`
  color:#fff;
  @media (max-width: 768px) {
    font-size:1rem;
  }
  
`



const Header = ({ siteTitle }) => (
  <HeaderWrapper>
   
      <h1 style={{ margin: 0 }}>
        <HeaderLink to="/">
          {siteTitle}
        </HeaderLink>
      </h1>
   
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
