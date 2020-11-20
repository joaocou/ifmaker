import styled from 'styled-components'

export const Container = styled.button`
    height: 40px;   
    border-radius: 20px;
    padding: 12px 30px;
    text-transform: uppercase;
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.primaryLight};
    font-weight: 700;      
    font-family: 'Open Sans', sans-serif; 
    border: 0;
    cursor: pointer;
`