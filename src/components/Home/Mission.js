import React from 'react'
import styled from 'styled-components'

const MissionVisionSection = styled.section`
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  height:33vh;
  background-color:rgba(0,0,0,.65);
`
const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:flex-start;
  color: #ffffff;
  width: 100%;
  max-width: 500px;
  h1 {
    font-family: "IBM Plex Serif";
  }
  p {
    color: #fefefe
  }
`

const Mission = () => {
  return (
    <MissionVisionSection>
      <TextBox>
        <h1>Mission</h1>
        <p>
          Deliver an exceptional construction experience built on integrity,
          partnership, and excellence, while caring for our employees,
          communities, and environment.
        </p>
      </TextBox>

    </MissionVisionSection>
  )
}

export default Mission;
