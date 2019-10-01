import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import logo from "../images/logo.png"
import './base-styles.scss'

const HeaderWrapper = styled.div`
  background-color: #fff;
  width:1200px;
  margin:0 auto;
  h1 {
    display:none;
  }
  img {
    display:block;
    margin-top:20px;
    float:left;
    width:200px;
  }
  height: 225px;

  @media all and (max-width: 768px) {
    height: 70px;
  }
  @media all and (max-width: 991px) {
    height: 100px;
  }
`
const HeaderLink = styled(props => <Link {...props} />)`
  display:hidden;
  color:$wb-green;
  @media (max-width: 768px) {
    font-size:1rem;
`

// const StyledLogo = style(props => <Link {...props} />)`

// `

const TopNav = styled(props => <Link {...props} />)`
  ul {
    display: block;
    margin: 40px 0;
    padding: 0;
    float: right;
    width:50%;
  }

  li {
    text-styles: none;
    display: block;
    float: left;
    font-size: 11px;
    padding:0px 7px;
  }
`

const Logo = () => <img src={logo} alt="Wieser Brothers Inc. Logo" />



const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <Logo />
    <h1 style={{ margin: 0 }}>
      <HeaderLink to="/">{siteTitle}</HeaderLink>
    </h1>

    <TopNav>
      <ul>
        <li>
          <Link to="/">507-895-8903</Link>
        </li>
        <li>
          <Link to="/">Contact Us</Link>
        </li>
        <li>
          <Link to="/">Employment Opportunites</Link>
        </li>
        <li>
          <Link to="/">Submit Bids</Link>
        </li>
        <li>
          <Link to="/">Info</Link>
        </li>
        <li>
          <a href="/">MSDS</a>
        </li>
      </ul>
    </TopNav>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
