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
  background-image: url(${projectHero});
  background-size: cover;
  background-position: center;
  
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
  `}
  ${screen.desktopSmall`
    width:991px;
    height:500px;
    align-items:center;
    justify-content:center;
  `}
  ${screen.desktopLarge`
    width:1199px;
    height:600px;
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
