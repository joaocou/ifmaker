import React from 'react'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from '../styles/global'
import { light } from '../styles/theme'

function App({ Component, pageProps }) {
    return(
        <ThemeProvider theme={light}>

            <Head>
                <meta charSet="utf-8" />
                <meta httpEquiv="content-language" content="pt-br" />
                <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="theme-color" content="#22974B" />
                
                <link rel="icon" href="/icon.png" />

                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;0,700;1,400&family=Poppins:wght@700&display=swap" rel="stylesheet" /> 
            </Head>

            <GlobalStyle />
            <Component {...pageProps} />
        </ThemeProvider>
    );
}   

export default App