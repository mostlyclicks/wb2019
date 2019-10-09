import React from 'react'
import { Link } from 'gatsby'
import styled from "styled-components"
import { screen } from './media-queries';


const StyledNav = styled.nav`
  background:#333;
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
    color:#cdcdcd;
    display:block;
    padding:10px 15px;
    font-size:14px;
  }
  a:hover {
    color:#fff;
    transition:0.7s;
    background-color:#000;
  }
  .secondary {
    display:none;
  }

  ${screen.tablet`
    ul {
      display:flex;
      justify-content:flex-end;
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
        <li><Link to="/">507-895-8903</Link></li>
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
