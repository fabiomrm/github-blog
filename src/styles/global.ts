import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
  }

  body {
    background-color: ${({ theme }) => theme.colors['gray-800']};
    color: ${({ theme }) => theme.colors['gray-50']};
    -webkit-font-smoothing: antialised;
  }

  body, input, textarea, button {
    font: 400 1rem Nunito, sans-serif;
  }

  ul {
    list-style: none;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  button {
    cursor: pointer;
  }

`;