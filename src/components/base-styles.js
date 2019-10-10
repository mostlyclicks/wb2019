import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  $headerGray: rgba(0,0,0,.65);
  $lightGray:rgba(0,0,0,.03);
  $gray:rgba(0,0,0,.60);
  $wb-green:#00573c;
  $wb-green-light:#bccfc9;
  $orange:#fe9314;

  h1, h2, h3, h4 {
    font-family:'Muli';
    color: $headerGray;
    font-weight:900;
    margin-top:2rem;
  }

  body, p, ul, li {
    font-family:'Open Sans';
    color: $gray;
  }

  blockquote {
    font-family:'IBM Plex Serif';
  }

  a {
    color:darken($wb-green, .8);
    &:hover {
      color:$wb-green-light;
    }
  }
`;

// export default GlobalStyle;