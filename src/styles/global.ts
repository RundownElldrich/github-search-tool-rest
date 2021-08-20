// import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  font-size: 10px;
}

body,
h1,
h2,
h3,
h4,
p,
ul,
ol,
li,
figure,
figcaption,
blockquote,
dl,
dd {
  margin: 0;
}

ul[class],
ol[class] {
  list-style: none;
  padding: 0;
}

body {
  font-family: 'Arial', sans-serif;
}

img {
  display: block;
  max-inline-size: 100%;
}

p,
h1,
h2,
h3,
h4,
h5,
h6,
li,
figcaption {
  max-width: 60ch;
}

input, select, textarea, button{
  font-family: inherit;
}

`;

export default GlobalStyle;
