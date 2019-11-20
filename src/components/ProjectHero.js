import React from 'react'
import styled from 'styled-components'
import { screen } from './media-queries';
import projectHero from '../images/1OV.jpg';

const Wrapper = styled.div`
  display: flex;
  flex-direction:row;
  justify-content:center;
  margin-top:15px;
`
const StyledProjectHero = styled.div`
  display: flex;
  justify-content:center;
  width: 100%;
  height:400px;
  
  background-image:
  linear-gradient(to bottom, rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0) 30%),
  url(${projectHero});
  background-size:cover;
  background-position-y:0px;
  background-repeat:no-repeat;
  
  .center-content {
    width: 400px;
    display: flex;
    flex-direction: column;
    font-family: Muli, sans-serif;
    color: #fff;
    margin: auto;
  }

  ${screen.tablet`
    height:400px;
    margin-top:-125px;
    z-index:-1;
  `}
  ${screen.desktopSmall`
    width:100%;
    height:600px;
    align-items:center;
    justify-content:center;
    margin-top:-125px;
    z-index:-1;
  `}
  ${screen.desktopLarge`
    width:100%;
    height:700px;
    
  `}
`
const ProjectHero = () => {
  return (
    <Wrapper>
      <StyledProjectHero>
        <div className="center-content">
          <caption>Organic Valley Headquarters<br />Cashton, WI</caption>
        </div>
      </StyledProjectHero>
    </Wrapper>
  )
}

export default ProjectHero
