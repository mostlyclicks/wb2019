import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import logo from "../images/logo.png"
import './base-styles.scss'
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
  width:100%;
  img {
    display:block;
    width:150px;
    padding:10px;
    margin:0 auto;
  };

  ${screen.tablet`
    img {margin:0 0;width:200px;padding:15px;}
  `};
  ${screen.desktopSmall`
    max-width:991px;
    border:1px solid blue;
    margin:0 auto;
  `};
  ${screen.desktopLarge`
    max-width:1199px;
  `}
`

const TopNav = styled.ul`
  position:absolute;
  top:5px;
  left:0;
  height:10px;
  display: block;

  font-size:12px;
  border:1px solid red;
  li {
    display: block;
    float:left;
    padding: 0px;
  }
  .secondary {
    display: none;
  }

  ${screen.desktopSmall`
    .secondary {display:block;}
  `}
`

const Header = ({ siteTitle }) => (
  <div>
    <TestDiv />
    <HeaderWrapper>
      <Logo />
      <TopNav>
        <li className="primary">
          <Link to="/">507-895-8903</Link>
        </li>
        <li className="primary">
          <Link to="/">Contact Us</Link>
        </li>
        <li className="primary">
          <Link to="/">Employment Opportunites</Link>
        </li>
        <li className="secondary">
          <Link to="/">Submit Bids</Link>
        </li>
        <li className="secondary">
          <Link to="/">Info</Link>
        </li>
        <li className="secondary">
          <a href="/">MSDS</a>
        </li>
      </TopNav>
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



