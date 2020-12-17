import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

* {
  box-sizing: inherit;
}

input, button, textarea {
  font-family: inherit;
}

html, body, #root {
  height: 100%;
}
`;

export default GlobalStyles;
