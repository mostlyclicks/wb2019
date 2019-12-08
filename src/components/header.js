import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import logoWhite from "../images/logo_w.png"
import TopNav from './topnav'
import MainNavigation from './MainNavigation';
import { screen } from './media-queries';

const HeaderWrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  height: auto;
  margin: 0 auto;
  margin-top: 0px;
  width: 100%;
  background-color: var(--wbGreenDark);

  ${screen.phone`
    
  `}

  ${screen.tablet`
    img {margin:12px 0 0 0;width:200px;padding:15px;}
    background-color: transparent;
  `};
  ${screen.desktopSmall`
    max-width:991px;
    margin:0 auto;
  `};
  ${screen.desktopLarge`
    max-width:1199px;
  `}
`

const Logo = styled.img`
  display: block;
  width: 150px;
  height: auto;
  padding: 20px;
  margin: 0px auto 10px auto;
  

  ${screen.phone`
    width:150px;
    height:auto
  `}

  ${screen.tablet`
    width:150px !important;
    height:auto;
  `}

  ${screen.desktopSmall`
    width:225px !important;
    height:auto;
  `}
`

const Header = ({ siteTitle }) => (
  <div>
    <TopNav />
    <HeaderWrapper>
        <Logo src={logoWhite} alt="Wieser Brothers Logo" />
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