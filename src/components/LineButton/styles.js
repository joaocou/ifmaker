import styled from 'styled-components'

export const Container = styled.button`
    flex: none;
    display: flex;
    flex-direction: column;
    background: none;
    color: ${props => props.theme.colors.primary};
    border: 0;
    text-decoration: none;
    cursor: pointer;
`

export const Row = styled.span`
    display: flex;
    width: 100%;
    flex: 1;
`

export const Line = styled.span`
    height: 5px;
    width: 100%;
    border-radius: 3px;
    background: ${props => props.theme.colors.primaryLight};
    flex: 1;
`

export const Text = styled.span`
    font-size: 12px;
    font-weight: 600;
    font-family: 'Open Sans', sans-serif;
    margin-right: 10px;
`