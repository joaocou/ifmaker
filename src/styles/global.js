import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body {
        color: ${props => props.theme.colors.text};
        font: 400 16px 'Open Sans', sans-serif;
        scroll-behavior: smooth;
    }

    a {
        color: ${props => props.theme.colors.primary};
        font-weight: 600;
        transition: opacity 0.4s ease;
    }

    a:hover {
        opacity: 0.6;
    }

    button {
        transition: opacity 0.4s ease;
    }

    button:hover {
        opacity: 0.6;
    }

    img {
        border-radius: 4px;
    }
`;