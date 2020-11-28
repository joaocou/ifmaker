import styled from 'styled-components'

export const Container = styled.button`
    height: 40px;   
    padding: 0 30px;
    border-radius: 20px;
    text-transform: uppercase;
    background: #fafafa;
    color: #999;
    font-weight: 700;      
    font-family: 'Open Sans', sans-serif; 
    border: 1px solid #bbb;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;

    outline: 0;

    :focus {
        box-shadow: 0 0 0px 3px rgba(0,0,0,0.1);
    }
`