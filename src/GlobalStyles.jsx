import { createGlobalStyle } from "styled-components";
import background from "../public/assets/images/fundo-pokemon.jpeg";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    width: 100vw;
    min-height: 100vh;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    background-image: url(${background});  
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default GlobalStyle;
