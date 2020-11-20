import styled from 'styled-components'

export const Container = styled.div`
    position: relative;
    width: 350px;

    @media (max-width: 800px) {
        width: 100%;
    }
`

export const Input = styled.input`
    width: 100%;
    font-family: 'Open Sans', sans-serif;
    height: 40px;
    background: #fff;
    border: 2px solid #ddd;
    padding: 8px 20px;
    padding-left: 60px;
    border-radius: 4px;
`

export const IconWrapper = styled.div`
    position: absolute;
    left: 22px;
    top: 10px;
`