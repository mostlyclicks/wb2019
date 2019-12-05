import React from 'react';
import { Link } from 'gatsby';
import styled from "styled-components";
import { screen } from './media-queries';

const StyledNav = styled.nav`  
  display:flex;
  justify-content:space-around;
  background: var(--darkGray);
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
    color: #fefefe;
    font-size: 11px;
    font-weight: 400;
    padding:8px 4px;
  }
  a:hover {
    color: rgba(0, 0, 0, 0.7);
    transition: 0.7s;
    background-color: var(--orange);
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
  background: rgba(0, 0, 0, .6);
  justify-content:flex-end;
    ul {
      
    }
    span {
      display:flex;
      justify-content:flex-start;
    }
    .secondarys {
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
        <li><a href="tel:507-895-8903">507.895.8903</a></li>
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
