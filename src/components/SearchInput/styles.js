import styled from 'styled-components'

export const Container = styled.div`
    width: auto;
    height: 40px;
    position: relative;
`

export const Input = styled.input`
    font-family: 'Open Sans', sans-serif;
    height: 40px;
    width: 320px;
    background: #fafafa ;
    border: 1px solid #bbb;
    padding: 8px 20px;
    padding-right: 50px;
    border-radius: 4px;
    outline: 0;

    :focus {
        box-shadow: 0 0 0px 3px rgba(0,0,0,0.1);
    }
`

export const IconWrapper = styled.button`
    position: absolute;
    top: 10px;
    right: 22px;
    width: 20px;
    background: none;
    border: 0;
    outline: 0;
    cursor: pointer;
`