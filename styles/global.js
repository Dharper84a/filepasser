import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
  h1, h2, h3, h4, h5, h6 {
    margin: 0.75rem 0;
    font-family: ${({theme}) => theme.typography.family.primary};
  }
  h1 {
    font-size: ${({theme}) => theme.getClamp(42, 72)};
  }
  h2 {
    font-size: ${({theme}) => theme.getClamp(32, 58)};
  }
  h3 {
    font-size: ${({theme}) => theme.getClamp(26, 40)};
  }
  h4 {
    font-size: ${({theme}) => theme.getClamp(17, 24)};
  }
  p, a {
    color: ${({theme}) => theme.colors.darkText};
    font-family: ${({theme}) => theme.typography.family.seconday};
    font-size: ${({theme}) => theme.getClamp(16, 20)};
    line-height: 1.5;
  }
  p {
    margin: 0 0 0.5rem 0;
  }
  a {
    color: ${({theme}) => theme.colors.blue};
    text-decoration: none;
    &:hover {
      color: ${({theme}) => theme.colors.darkBlue};
      text-decoration: underline;
    }
    &:visited {
      color: ${({theme}) => theme.colors.purple};
    }
  }

  * {
    box-sizing: border-box;
  }

`

export default GlobalStyle;