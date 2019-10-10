import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import "./base-styles"

const StyledNavigation = styled.div`
  display:none;
  width: 900px;
  position:relative;
  margin-top:-70px;
  margin-left:-600px;
  background-color: gray;
  padding: 20px;
  text-align: right;
  font-weight: 700;

  ul,
  li {
    color: #ffffff;
    display: block;
    margin: 0;
    padding: 0;
  }
  li {
    display: block;
  }
  a {color:#ffffff;}
`

const Navigation = () => (
  <StyledNavigation>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/">Our Firm</Link>
      </li>
      <li>Our Services</li>
      <li>Our Commitment</li>
      <li>Our Projects</li>
      <li>News</li>
      <li>Plan Room</li>
      <li>Events</li>
    </ul>
  </StyledNavigation>
)

export default Navigation