import styled from 'styled-components'

export const Container = styled.div`
    width: auto;
    height: 40px;
    position: relative;
`

export const Input = styled.input`
    font-family: 'Open Sans', sans-serif;
    height: 40px;
    width: 200px;
    background: #fff;
    border: 2px solid #ddd;
    border-radius: 4px;
    padding: 8px 20px;
    padding-left: 20px;
    cursor: pointer;

    @media (max-width: 800px) {
        width: 100%;
        margin: 0;
        margin-bottom: 20px;

        appearance: none;
        padding-left: 60px;
        padding-right: 60px;
    }
`

export const ArrowWrapper = styled.div`
    display: none;
    position: absolute;
    top: 10px;
    right: 22px;
    pointer-events: none;
    max-width: 20px;

    @media (max-width: 800px) {
        display: block
    }
`

export const IconWrapper = styled.div`
    display: none;
    position: absolute;
    left: 22px;
    top: 10px;
    width: 20px;
    pointer-events: none;

    @media (max-width: 800px) {
        display: block
    }
`