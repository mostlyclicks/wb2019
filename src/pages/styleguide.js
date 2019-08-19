import React from 'react'
import styled from 'styled-components'

import { Link } from 'gatsby'

const Container = styled.div`
  .bquote {
    background-color:blue;
  }
  margin:1rem auto;
  width:960px;
  h1, h2, h3, h4 {font-family:'Muli';font-weight:900;margin-top:2rem;color:rgba(0,0,0,.65);}
  p, li {font-family:'Open Sans';font-weight:4 00;color:rgba(0,0,0,.60)}
  a {color:#fe9314;}
  
  blockquote::before {
    content:"“";
    font-size:20rem;
    display:block;
    position:relative;
    left:-125px;
    top:15px;
    color:#dbf0e9;
  }
  blockquote {
    background-color:#dbf0e9;
    color:white;
    font-size:1.5rem;
    line-height:1.75rem;
    padding:2rem;
    color:rgba(0,0,0,.58);
    position:relative;
    margin:80px 0px 0 80px;
    height:70%;
    p {
      position:relative;
      left:-4.5rem;
      top:-5.5rem;
      width:125%;
      font-family:"IBM Plex Serif";
      font-weight:400;
    }
  }


`
const SectionTitleStyle = styled.div`
  display:grid;
  width:100%;
  background-color:#efefef;
  border-top:1px solid #ededed;
  margin:2rem 0 1rem 0;
  padding:0rem 1rem;
  text-transform:uppercase;

`
const PlaceholderText = (props) => (
  <div>
    <p>Wieser Brothers General Contractor, Inc. is a family-owned and operated firm based in La Crescent, MN. Founded in 1994 by Jeff and Brian Wieser, the company has grown into a full-service, integrated 130 plus person team that includes journeyman carpenters, certified concrete finishers, trained steel erectors, skilled field superintendents and professional project managers, all dedicated to delivering quality construction services. Wieser Brothers is the leader in design/build services, partnering closely with clients to meet current and future building needs with intelligence and efficiency. TRUST is the cornerstone of any <Link to="#">Wieser Brothers</Link> project. Over 60% of annual sales are in repeat business from satisfied customers.</p>
  </div>
)


const TwoColumn = styled.div`
  display:grid;
  grid-template-columns:48% 48%;
  grid-template-rows:auto auto;
  grid-gap:4%;
`

const OneColumn = styled.div`
  display:grid;
  grid-template-columns:100%;
  grid-template-rows:auto;
`

const ColorBar = styled.div`
  display:grid;
  grid-template-columns:50% 25% 15% 6% 3% 1%;
  grid-template-rows:200px;
  margin-top:2rem;
  .main {background-color:rgba(0,0,0,.03);}
  .green {background-color:#bccfc9;}
  .dark-green {background-color:#00573c;}
  .black-2 {background-color:rgba(0,0,0,.65);}
  .black-1 {background-color:rgba(0,0,0,.60);}
  .orange {background-color:#fe9314;}
`

const ColorGrid = styled.div`
  display:grid;
  grid-template-columns:30% 30% 30%;
  grid-template-rows:200px 200px 200px;
  grid-gap:5%;
  margin:2rem 0 0 0;
  .main {background-color:rgba(0,0,0,.03);}
  .green {background-color:#bccfc9;}
  .dark-green {background-color:#00573c;}
  .black-2 {background-color:rgba(0,0,0,.65);}
  .black-1 {background-color:rgba(0,0,0,.60);}
  .orange {background-color:#fe9314;}
  .txt {padding:1rem;}
  .light p {color:#ffffff;}
`

const BlockquoteStyled = styled.blockquote`
  background-color:#bccfc9;
  padding:40px;
  background-position:100px 100px;
  

  
`

const Colors = () => (
  <section>
    <SectionTitle title="Colors" />
    <p>This shows colors by weight and usage. In addition to white, the light gray and light green will be used as backgrounds for content and body text. The WB green used sparingly for stronger branding color blocks, footer, possible navigation and inline link colors. The gray and darker gray are for heading tags and paragraph text respectively. The orange is to be used in small amounts for content highlights, navigation elements, small top navs and alerts.</p>

    <ColorBar>
      <div class="main"></div>
      <div class="green"></div>
      <div class="dark-green"></div>
      <div class="black-1"></div>
      <div class="black-2"></div>
      <div class="orange"></div>
    </ColorBar>
    <ColorGrid>
      <div class="main dark"><p class="txt">Black, 3% alpha</p></div>
      <div class="green dark"><p class="txt">WB Green Light, #bccfc9</p></div>
      <div class="dark-green light"><p class="txt">WB Green Light, #00573c</p></div>
      <div class="black-1 light"><p class="txt">Black, 65% alpha</p></div>
      <div class="black-2 light"><p class="txt">Black, 60% alpha</p></div>
      <div class="orange dark"><p class="txt">Orange, #fe9314</p></div>
    </ColorGrid>
  </section>
)

const Lists = () => (
  <section>
    <SectionTitle title="Lists" />
    <TwoColumn>
      <div>
        <h4>Unordered List</h4>
        <ul>
          <li>Design</li>
          <li>Planning</li>
          <li>Project Management</li>
          <li>Build</li>
        </ul>
      </div>
      <div>
        <h4>Ordered List</h4>
        <ol>
          <li>Design</li>
          <li>Planning</li>
          <li>Project Management</li>
          <li>Build</li>
        </ol>
      </div>
    </TwoColumn>
  </section>
)

const SectionTitle = (props) => (
  <SectionTitleStyle>
    <h3>{ props.title }</h3>
  </SectionTitleStyle>
)

const HeaderText = () => (
  <section>
    <SectionTitle title="Headings & Paragraphs" />
    <OneColumn>
      <div>
        <h1>H1 Heading</h1>
        <PlaceholderText />
      </div>
      <div>
        <h2>H2 Heading</h2>
        <PlaceholderText />
      </div>
    </OneColumn>
    <OneColumn>
      <div>
        <h3>H3 Heading</h3>
        <PlaceholderText />
      </div>
      <div>
        <h4>H4 Heading</h4>
        <PlaceholderText />
      </div>
    </OneColumn>
  </section>
)

const Fonts = () => (
  <section>
    <SectionTitle title="Fonts" />
    <TwoColumn>
      <div>
        <h3>Muli</h3>
        <p>Usage: Headers<br />
          https://fonts.google.com/specimen/Muli
        </p>
      </div>
      <div>
        <h3>Open Sans</h3>
        <p>Usage: Paragraphs, lists, general text<br />
        https://fonts.google.com/specimen/Open+Sans
        </p>
      </div>
    </TwoColumn>
    <OneColumn>
      <h3>IBM Plex Serif</h3>
      <p>Usage: Blockquotes<br />
        https://fonts.google.com/featured/Plex
        </p>
    </OneColumn>
  </section>
)

const BlockquoteSection = () => (
  <section>
    <SectionTitle title="Blockquotes <DESIGN IN PROGRESS>" />
    <TwoColumn>
      <blockquote><p>“Their approach to design/build is the main reason we started working with Wieser Brothers. They are better prepared, better staffed, they listen, they respond, and they pay attention to details. Our projects move forward at a better rate. What you see each time is quality.” <br /><br /><b>Rudy Rott<br />Vice President of Operations<br />Main Street Ingredients</b></p></blockquote>
      <blockquote><p>“Our staff enjoyed working with Wieser Brothers throughout the construction of our bank. We were impressed by their communication and attention to detail.” <br /><br /><b>Dale A. Walter<br />President, Bremer Bank</b></p></blockquote>
    </TwoColumn>
    
  </section>
)


const StyleGuidePage = () => (
  <Container>
    <h1>Wieserbrothers.com Style Guide | V1</h1>
    <Fonts />
    <HeaderText />
    <Lists />
    <Colors />
    <BlockquoteSection />
  </Container>
)

export default StyleGuidePage