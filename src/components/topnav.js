import React from 'react';
import { Link } from 'gatsby';
import styled from "styled-components";
import { screen } from './media-queries';
import './base-styles.scss'

const StyledNav = styled.nav`  
  background: rgba(0, 0, 0, 0.7);
  height: 32px;
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items:center;
  }
  a {
    text-decoration: none;
    color: #fe9314;
    font-size: 11px;
    font-weight: 700;
  }
  a:hover {
    color: rgba(0, 0, 0, 0.7);
    transition: 0.7s;
    background-color: #fe9314;
  }
  .secondarys {
    display: none;
  }

  ${screen.phone`
    ul {
      display:flex;
      justify-content:space-evenly;
      li {padding-left:5px;padding-right:5px;}
    }
  `}

  ${screen.tablet`
    ul {
      
    }
    span {
      display:flex;
      justify-content:flex-start;
    }
    .secondary {
      display:block;
    }
  `}

  ${screen.desktopSmall`
    ul {
      display:flex;
      justify-content:flex-end;
      align-items:center;
      li {padding:0 10px;}
    }
  `}
`

const TopNav = () => {
  return (
    <StyledNav>
      <ul>
        <li><a href="tel:507-895-8903">507-895-8903</a></li>
        <li><Link to="/">Contact Us</Link></li>
        <li><Link to="/">Employment Opportunites</Link></li>
        <li><Link to="/" className="secondary">Submit Bids</Link></li>
        <li><Link to="/" className="secondary">Info</Link></li>
        <li><a href="/" className="secondary">MSDS</a></li>
      </ul>
    </StyledNav>
  )
}

export default TopNav
