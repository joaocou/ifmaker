import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    overflow: hidden;
    display: flex;
`

export const Item = styled.div`
    width: 100%;
    height: auto;
    margin: 0;
    flex: none;
    transition: 0.5s ease-in-out;

    display: flex;
    justify-content: center;
    align-items: center;
`


export const Card = styled.div`
    width: 90%;
    height: 90%;
    padding: 30px 50px;
    margin: 20px 0;
    background: #fff;
    border-radius: 20px;
    box-shadow: 0 0 4px rgba(0,0,0,0.2);

    transition: 0.5s ease-in-out;

    p {
        width: 100%;
    }

    @media (max-width: 800px) { 
        width: 90%;
    }
`

export const Title = styled.h3`
    font-family: 'Poppins', sans-serif;
    font-size: 36px;
    margin-bottom: 30px;

    @media (max-width: 800px) {
        font-size: 30px;
    }
`

export const Row = styled.div`
    width: 100%;

    display: flex;
    justify-content: center;
`

export const Dot = styled.button`
    width: 20px;
    height: 20px;
    background: ${props => props.active ? props.theme.colors.primary : '#ddd'};
    border-radius: 10px;
    text-decoration: none;
    margin: 20px 10px;
    border: 0;
    cursor: pointer;
    outline: 0;

    :hover {
        opacity: 1;
    }
`