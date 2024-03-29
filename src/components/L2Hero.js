import React from 'react'
import styled from 'styled-components'
import { screen } from './media-queries';
import projectHero from '../images/1OV.jpg';

const Wrapper = styled.div`
  display: flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  margin-top:-10px;
  ${screen.tablet`
    margin-top:15px;
  `}
`
const StyledProjectHero = styled.div`
  display: none;
  justify-content:center;
  align-items:flex-end;
  width: 100%;
  height:400px;
  background-image:linear-gradient(to bottom, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0) 100%),url(${projectHero});
  background-size:cover;
  background-position-y:0px;
  background-repeat:no-repeat;
  
  .center-content {
    display: flex;
    flex-direction: row;
    justify-content:flex-end;
    font-family: Muli, sans-serif;
    color: #fff;
    padding:30px;
    caption {text-shadow:0px 0px 15px rgba(0,0,0,.5);}
    
  }

  ${screen.phone` 
    display:flex;
 
  `}

  ${screen.tablet`
    height:250px;
    margin-top:-167px;
    z-index:-1;
    justify-content:center;
    align-items:flex-end;

  `}
  ${screen.desktopSmall`
    width:100%;
    height:25vh;
    margin-top:-187px;
    z-index:-1;
    justify-content:flex-end;
    align-items:flex-end;
    
  `}
  ${screen.desktopLarge`
    width:100%;
    height:25vh;
  `}
`
const ProjectHero = () => {
  return (
    <Wrapper>
      <StyledProjectHero>
        <span className="center-content">
          <caption>Organic Valley Headquarters<br />Cashton, WI</caption>
        </span>
      </StyledProjectHero>
    </Wrapper>
  )
}

export default ProjectHero
