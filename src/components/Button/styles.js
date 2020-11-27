import styled from 'styled-components'

export const Container = styled.button`
    height: 40px;  
    padding: 0 30px;
    border-radius: 20px;
    padding: 12px 30px;
    text-transform: uppercase;
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.primaryLight};
    font-weight: 700;      
    font-family: 'Open Sans', sans-serif; 
    border: 0;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;
`