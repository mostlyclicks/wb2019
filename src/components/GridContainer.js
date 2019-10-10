import React from 'react'
import styled from 'styled-components'
import { screen } from "./media-queries"


const GridContainerWrapper = styled.div`
  display: grid;
  grid-template-columns:1fr;
  grid-gap: 10px;
  margin:50px auto;
  padding:20px;

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
  :nth-child(1) {order: 1;}
  :nth-child(2) {order: 2;}
  :nth-child(3) {order: 4;}
  :nth-child(4) {order: 3;}
  :nth-child(5) {order: 5;}
  :nth-child(6) {order: 6;}

  :nth-child(2),
  :nth-child(3),
  :nth-child(6) {
    background-color: blue;
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



const GridContainer = () => {
  return (
    <GridContainerWrapper>
      <GridItem>One</GridItem>
      <GridItem>Two</GridItem>
      <GridItem>Three</GridItem>
      <GridItem>Four</GridItem>
      <GridItem>Five</GridItem>
      <GridItem>Six</GridItem>
    </GridContainerWrapper>
  )
}

export default GridContainer
