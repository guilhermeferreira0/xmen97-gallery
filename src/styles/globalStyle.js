import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
    }

    html {
        font-size: 62.5%;
        scroll-behavior: smooth;
    }

    body {
        font-size: 2.4rem; // 1
        font-family: ${({ theme }) => theme.fonts.family.default};
        overflow-x: hidden;
    }
`;