import React from 'react'
import styled from 'styled-components'
import bgImg from "../images/istockphoto-812099500.jpg"
import { screen } from "./media-queries"

const MissionVisionSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50vh;
  margin-top:auto;
  

  background-image: 
    url(${bgImg});
  background-size: cover;
 

  ${screen.tablet`
    padding-left:8%;
    align-items:flex-start;
    
  `};
`

const TextBoxWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  padding:20px 40px;
  div:nth-last-child(1) {
    margin-top: 1rem;
    border-top: 5px solid #fff;
    padding-top: 1.65rem;
  }
`

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:flex-start;
  color: #ffffff;
  width: 100%;
  max-width: 400px;
  h2 {
    font-family: "IBM Plex Serif";
    margin:0;
    font-size:2rem;
  }
  p {
    color: #fff;
    margin-top:0rem;
    font-size:1.3rem;
    line-height:1.5em;
  }
`

const Mission = () => {
  return (
    <MissionVisionSection>
      <TextBoxWrapper>
        <TextBox>
          <h2>Mission</h2>
          <p>
            Deliver an exceptional construction experience built on integrity,
            partnership, and excellence, while caring for our employees,
            communities, and environment.
          </p>
        </TextBox>
        <TextBox>
          <h2>Vision</h2>
          <p>
            Build our team and company to be the industry leader in
            construction, while maintaining our family-owned core values.
          </p>
        </TextBox>
      </TextBoxWrapper>
    </MissionVisionSection>
  )
}

export default Mission;
