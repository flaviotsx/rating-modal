import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    scroll-behavior: smooth;
  }
  html, body {
    font-family: Roboto;
    background: #f5f7f9;
  } 
  
`;
