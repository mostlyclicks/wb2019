import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { screen } from './media-queries';
// import { Link } from '@reach/router';



const NavWrapper = styled.section`
  display:none;
  flex-direction:row;
  justify-content:flex-end;
  align-items:center;
  width:100%;
  #side-menu {
    display:none;
  }

  ${screen.phone`
    display:none;
    align-items:center;
  `}

  ${screen.tablet`
    display:flex;
    
  `}
  
  ${screen.desktopSmall`
    margin:0 auto;
    display:flex;
  `}

  ${screen.desktopLarge`
    margin:0 auto;
    max-width:1199px;
  `}
`

const NavBar = styled.nav`
  display:flex;
  align-items:center;
  ul {
    display:flex;
    flex-direction:row;
    list-style:none;
    margin:0;
    padding:0;
  }
  li {
    margin:0;
    font-size:14px;
  }
  a {
    display:block;
    padding:7px 8px;
    margin:0;
    font-family:'Muli' sans-serif;
    font-weight:900;
    text-transform:uppercase;
    text-decoration:none;
    transition:.5s;
    &:hover {
      background-color:rgba(0,0,0,.4);
      color:#fff;
    }
  }

   ${screen.tablet`
      li {font-size:10px;}
  `}

  ${screen.desktopSmall`
      li {font-size:14px;}
  `}

`

const Hamburger = styled.span`
  display:none;
`

// const MainNavigation = () => {
class MainNavigation extends React.Component {

  toggleMenu() {
    console.log("buttonClicked")
  }
  
  render() {

  return (
    
    <NavWrapper>
      <NavBar>
        <div>

        </div>
        <Hamburger>
          <a href="#" onClick={this.toggleMenu}>
            <svg width="30" height="30">
              <path d="M0,5 30,5" stroke="rgba(0,0,0,.4" stroke-width="5" />
              <path d="M0,14 30,14" stroke="rgba(0,0,0,.4" stroke-width="5" />
              <path d="M0,23 30,23" stroke="rgba(0,0,0,.4" stroke-width="5" />
            </svg>
          </a>
        </Hamburger>

        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/">Our Firm</Link></li>
          <li><Link to="/">Our Services</Link></li>
          <li><Link to="/">Our Commitment</Link></li>
          <li><Link to="/">Projects</Link></li>
          <li><Link to="/">News</Link></li>
          <li><Link to="/">Plan Room</Link></li>
          <li><Link to="/">Events</Link></li>
        </ul>
      </NavBar>

      <div id="side-menu" class="side-nav">
        <a href="#" class="btn-close" onclick="closeSideMenu">&times;</a>
        <Link to="/">Home</Link>
        <Link to="/">Our Firm</Link>
        <Link to="/">Our Services</Link>
        <Link to="/">Our Commitment</Link>
        <Link to="/">Projects</Link>
        <Link to="/">News</Link>
        <Link to="/">Plan Room</Link>
        <Link to="/">Events</Link>
      </div>

    </NavWrapper>
  )
  }
};

export default MainNavigation;