import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import logo from "../images/logo.png"
import TopNav from './topnav'
import MainNavigation from './MainNavigation';
// import { BaseStyle } from './base-styles'
import { screen } from './media-queries';


const TestDiv = styled.div`
  height: 0px;
  background-color: #cdcdcd;
  ${screen.phone`
    background-color:orange;
  `};
  ${screen.tablet`
    background-color:pink;
  `};
  ${screen.desktopSmall`
    background-color:crimson;
  `};
  ${screen.desktopLarge`
    background-color:blue;
  `};
`

const Logo = () => <img src={logo} alt="Wieser Brothers Inc. Logo" />

const HeaderWrapper = styled.section`
  display:flex;
  flex-direction:row;
  justify-content:flex-start;
  height:110px;
  margin:0 auto;
  margin-top: 0px;
  width: 100%;
  img {
    display: block;
    width: 225px;
    padding: 20px;
    margin: 0 auto;
  }

  ${screen.tablet`
    img {margin:12px 0 0 0;width:200px;padding:15px;}
  `};
  ${screen.desktopSmall`
    max-width:991px;
    margin:0 auto;
  `};
  ${screen.desktopLarge`
    max-width:1199px;
  `}
`

const Header = ({ siteTitle }) => (
  <div>
    {/*<TestDiv />*/}
    <TopNav />
    <HeaderWrapper>
      <Logo />
      <MainNavigation />
    </HeaderWrapper>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header