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
    border: 1px solid #bbb;
    background: #fafafa;
    border-radius: 4px;
    padding: 8px 20px;
    padding-left: ${props => props.iconType ? '60px' : '20px'};

    outline: 0;

    :focus {
        box-shadow: 0 0 0px 3px rgba(0,0,0,0.1);
    }
`

export const IconWrapper = styled.div`
    position: absolute;
    left: 22px;
    top: 10px;
`