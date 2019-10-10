import React from 'react'
import styled from 'styled-components'

const StyledProjectHero = styled.div`
  display:block;
  width:100%;
  height:30vh;
  background-image:url("https://picsum.photos/id/1025/1200/600");
  background-size:cover;
  background-position:center;
  display:flex;
  .center-content {
    width:400px;
    display:flex;
    flex-direction:column;
    align-items:center;
    margin:auto;
    font-family:Muli, sans-serif;
    color:#fff;
  }
`;


const ProjectHero = () => {
  return (
    <div>
      <StyledProjectHero>
        
        <div className="center-content">
          <caption>Organic Valley Headquarters<br />Cashton, WI</caption>
        </div>
        
      </StyledProjectHero>
    </div>
  )
}

export default ProjectHero
