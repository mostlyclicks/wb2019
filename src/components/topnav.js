import React from 'react';
import { Link } from 'gatsby';
import styled from "styled-components";
import { screen } from './media-queries';
import './base-styles.scss'


// const lightGray = 'rgba(0,0,0,.03)';
// const gray = 'rgba(0,0,0,.60)';

const StyledNav = styled.nav`
  background:rgba(0,0,0,.03);
  height:46px;
  ul {
    list-style-type:none;
    padding:0;
    margin:0;
    display:flex;
    justify-content:center; 
  }
  a {
    text-decoration:none;
    color:rgba(0,0,0,.60);
    display:block;
    padding:10px 15px;
    font-size:14px;
  }
  a:hover {
    color:#fff;
    transition:0.7s;
    background-color:#00573c;
  }
  .secondary {
    display:none;
  }

  ${screen.tablet`
    ul {
      display:flex;
      justify-content:center;
    }
    span {
      display:flex;
      justify-content:flex-start;
    }
    .secondary {
      display:block;
    }
  `}
`

const TopNav = () => {
  return (
    <StyledNav>
      <ul>
        <span className="open-slide">
          <a href="#" onclick="openSideMenu()">
            <svg width="30" height="30">
              <path d="M0,5 30,5" stroke="#fff" stroke-width="5" />
              <path d="M0,14 30,14" stroke="#fff" stroke-width="5" />
              <path d="M0,23 30,23" stroke="#fff" stroke-width="5" />
            </svg>
          </a>
        </span>
        
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
