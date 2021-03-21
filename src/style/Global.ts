import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.colors.background};

    font-family: 'Poppins';

    img {
      height: auto;
      max-width: 100%;
    }
  }
svg {
    fill: rgb(153, 127, 94) !important;
}
button {
    background-color: rgb(144, 199, 5) !important;
}
div {
    color: rgb(151, 125, 91) !important;
}


`

export default GlobalStyle
