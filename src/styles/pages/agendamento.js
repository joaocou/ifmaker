import styled from 'styled-components'

export const Container = styled.div`
    padding: 80px 10%;
`

export const Title = styled.h1`
    font-family: 'Poppins', sans-serif;
    font-size: 50px;
    margin-bottom: 40px;

    @media (max-width: 800px) {
        font-size: 40px;
    }
`

export const Subtitle = styled.p`
    font-size: 16px;
    color: #555;
    max-width: 500px;
    margin-bottom: 40px;

    @media (max-width: 800px) {
        width: 100%;
    }
`

export const Row = styled.div`
    display: flex;
    align-items: center;

    margin-top: 20px;

    > a {
        margin-right: 20px;
        text-decoration: none;
    }
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;

    margin-right: 140px;

    @media (max-width: 800px) {
        margin: 0;
    }  
`

export const AlertBox = styled.div`
    width: 600px;
    background: #fafafa;
    padding: 40px;
    margin: 60px 0;
    border-radius: 20px;
    box-shadow: 0 0 4px rgba(0,0,0,0.2);

    > div:first-child {
        margin-bottom: 40px;
        margin-top: 0;

        svg {
            flex: none;
        }
    }

    @media (max-width: 800px) {
        width: 100%;
    }
`

export const AlertMessage = styled.p`
    font-size: 16px;
    color: #555;
    margin-left: 20px;

    @media (max-width: 800px) {
        width: 100%;
    }
`