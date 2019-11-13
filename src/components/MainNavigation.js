import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { screen } from './media-queries';
// import { Link } from '@reach/router';

// import heroImage from '../images/hero_8918.jpg'

const NavWrapper = styled.section`
  display:flex;
  flex-direction:row;
  justify-content:flex-end;
  align-content:center;
  
  width:100%;
  #side-menu {
    display:none;
  }
  
  ${screen.desktopSmall`
    margin:0 auto;
  `}

  ${screen.desktopLarge`
    margin:0 auto;
    max-width:1199px;
  `}


`

const NavBar = styled.nav`
  display:flex;
  
  ul {
    display:flex;
    flex-direction:row;
    
    list-style:none;
    margin:0;
    padding:0;
    text-align:right;
    margin-bottom:50px;
    border:1px solid green;
  }
  li {
    margin:0;
    letter-spacing:1.2px;
  }
  a {
    display:block;  
    padding:7px 30px;
    margin:0;
    padding:5px;
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

`;

// const HeroImage = () => <img src={heroImage} alt="WB Hero Image" />

const MainNavigation = () => {
  return (
    
    <NavWrapper>
      <NavBar>
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

      <div id="side-menu">
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
};

export default MainNavigation
