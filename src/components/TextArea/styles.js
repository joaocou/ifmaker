import styled from 'styled-components'

export const Container = styled.div`
    position: relative;
    width: 350px;

    @media (max-width: 800px) {
        width: 100%;
    }
`

export const Input = styled.textarea`
    width: 100%;
    min-height: 160px;
    font-family: 'Open Sans', sans-serif;
    height: 40px;
    background: #fafafa;
    border: 1px solid #bbb;
    padding: 8px 20px;
    border-radius: 8px;
    resize: none;

    outline: 0;

    :focus {
        box-shadow: 0 0 0px 3px rgba(0,0,0,0.1);
    }
`