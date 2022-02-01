import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Mulish', sans-serif;
  }

  body, input, textarea, button {
    font-weight: 300;
  }

  h1,h2,h3,h4,h5,h6,strong {
    font-weight: 800;
  }

  body {
    background: #0A0C0F;
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;