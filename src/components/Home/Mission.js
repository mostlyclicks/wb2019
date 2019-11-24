import React from 'react'
import styled from 'styled-components'

const MissionSection = styled.section`
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  height:100vh;
  background-color:rgba(0,0,0,.65);
`
const MissionTextBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: #fe9314;
  width: 100%;
  max-width: 400px;
  h1 {
    font-family: "IBM Plex Serif";
  }
  p {
    padding: 0 20px;
    color: #fefefe
  }
`

const Mission = () => {
  return (
    <MissionSection>
      <MissionTextBox>
        <h1>Mission</h1>
        <p>
          Deliver an exceptional construction experience built on integrity,
          partnership, and excellence, while caring for our employees,
          communities, and environment.
        </p>
      </MissionTextBox>
    </MissionSection>
  )
}

export default Mission;
