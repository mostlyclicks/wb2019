import React from "react"
// import { Link } from "gatsby"

import styled from "styled-components"
import Mission from "./Mission"
import { screen } from "./media-queries"
import { FaFacebook, FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa"



const FooterSection = styled.section`
  margin-top:auto;
  background-color: var(--darkGray);
  
`

const FooterContainer = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0px auto;
  color: #fff;
  p {
    margin: 0;
    line-height: 1.5rem;
  }
  a {
    color: var(--orange);
  }

  div {
    display: flex;
    width: 100%;
    ul {
      margin: 0;
      padding: 0;
      font-size: 1rem;
      line-height: 1.5rem;
      li {
        list-style-type: none;
      }
    }
  }

  div:nth-child(4) {
    display: flex;
    flex-direction: column;

    ul {
      margin-top: 1rem;
      width: 50%;
      font-size: 2rem;
      display: flex;
      justify-content: space-between;
    }
  }

  ${screen.tablet`
    flex-direction:row;
    div {width:30%;}
  `};
  ${screen.desktopSmall`
    max-width:991px;
    
  `};
  ${screen.desktopLarge`
    max-width:1199px;
  `}
`


const Footer = () => (
  <FooterSection>
    <Mission />
    <FooterContainer>
      <div>
        <ul>
          <li>Home</li>
          <li>Our Firm</li>
          <li>Our Services</li>
          <li>Our Commitment</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>Projects</li>
          <li>News</li>
          <li>Plan Room</li>
          <li>Events</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>Contact Us</li>
          <li>Employment Opportunities</li>
          <li>Submit Bids</li>
          <li>Info</li>
          <li>MSDS</li>
        </ul>
      </div>
      <div>
        <p>
          200 Twilite Street
          <br />
          La Crescent, MN 55947
          <br />
          507.895.8903
          <br />
          Fax: 507.895.8438
          <br />
          <a href="mailto:info@wieserbrothers.com">info@wieserbrothers.com</a>
        </p>

        <ul>
          <li>
            <a href="#">
              <FaFacebook />
            </a>
          </li>
          <li>
            <a href="#">
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a href="#">
              <FaYoutube />
            </a>
          </li>
          <li>
            <a href="#">
              <FaInstagram />
            </a>
          </li>
        </ul>
      </div>
    </FooterContainer>
  </FooterSection>
)

export default Footer