import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif;
    background: #ffffff;
    color: #000000;
    font-size: 1.15em;
    margin: 0;
    letter-spacing: 0.09px;

    @media (max-width: ${({ theme }) => theme.screens.mobile}) {
      font-size: 1em;
    }
  }
`;
