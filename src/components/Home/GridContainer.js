import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { screen } from "../media-queries"
import gridBackground from '../../images/hero_8918_background.jpg'

const GridSection = styled.section`
  width: 100%;
  background-image: url(${gridBackground});
  background-size:100%;
  background-repeat:no-repeat;
  background-color:#fefefe;
`

const GridContainerWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
  margin: 50px auto;
  padding: 20px;
  


  ${screen.tablet`
    grid-template-columns:1fr 1fr; 
    max-width:991px;
    margin:50px auto;
    grid-gap:20px;
  `}
`
const GridItem = styled.div`
  background-color: rgba(0, 0, 0, 0.25);
  height: 400px;
  display: block;
  padding: 20px;
  background-color: rgba(255,255,255,1);
  box-shadow:0px 0px 8px rgba(0,0,0,.08);
  :nth-child(1) {
    order: 1;
    background-image: url("https://picsum.photos/800");
  }
  :nth-child(2) {
    order: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  :nth-child(3) {
    order: 4;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  :nth-child(4) {
    order: 3;
    background-image: url("https://picsum.photos/800");
  }
  :nth-child(5) {
    order: 5;
    background-image: url("https://picsum.photos/800");
  }
  :nth-child(6) {
    order: 6;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  ${screen.tablet`
    height: 300px;
    :nth-child(1) {order: 1;}
    :nth-child(2) {order: 2;}
    :nth-child(3) {order: 3;}
    :nth-child(4) {order: 4;}
    :nth-child(5) {order: 5;}
    :nth-child(6) {order: 6;}
  `}

  ${screen.desktopSmall`
    height:400px;
  `}
`
const GridBox = styled.div`
  width: 250px;
  height: 250px;
  overflow: hidden;
  h1 {
    font-size: 36px;
    line-height: 2.45rem;
    margin-top: 1rem;
    font-family: "IBM Plex Serif";
  }
  a {
    color: #fe9314;
    text-transform:uppercase;
    font-size:18px;
    font-weight:bold;
    text-decoration:none;
    font-family:'Open Sans';
    transition:.5s;
    :hover {
      color:black;
    }
  }
`




const GridContainer = () => {
  return (
    <GridSection>
      <GridContainerWrapper>
        <GridItem>One</GridItem>
        <GridItem>
          <GridBox>
            <h1>
              Trust
              <br />
              Partnership
              <br />
              Excellence
            </h1>
            <Link to="/">Learn more</Link>
          </GridBox>
        </GridItem>

        <GridItem>
          <GridBox>
            <h1>News</h1>
            <p>New ABC Company Expansions</p>
            <Link to="/">Read more</Link>
          </GridBox>
        </GridItem>

        <GridItem>Four</GridItem>
        <GridItem>Five</GridItem>
        <GridItem>
          <GridBox>
            <h1>Employment Opportunities</h1>
            <p>See all of our job opportunities</p>
            <Link to="/">Start here</Link>
          </GridBox>
        </GridItem>
      </GridContainerWrapper>
    </GridSection>
  )
}

export default GridContainer
