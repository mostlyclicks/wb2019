import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const NavBar = styled.nav`

`;


const MainNavigation = () => {
  return (
    <div>
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

    </div>
  )
};

export default MainNavigation
