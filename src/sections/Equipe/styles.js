import styled from 'styled-components'

export const Container = styled.div`
    padding: 20px 10%;
    padding-bottom: 60px;
`

export const Title = styled.div`
    font-family: 'Poppins', sans-serif;
    font-size: 36px;
    margin-bottom: 60px;

    @media (max-width: 800px) {
        font-size: 30px;
    }
`

export const PersonList = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    flex-wrap: wrap;

    @media (max-width: 800px) {
        flex-direction: column;
    }
`

export const PersonItem = styled.div`
    width: 240px;
    margin-bottom: 20px;
    margin-right: 20px;

    display: flex;
    align-items: center;
    justify-content: flex-start;
`

export const PersonDetails = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    margin-top: 7px;
`

export const PersonAvatar = styled.img`
    height: 50px;
    width: 50px;
    border-radius: 25px;
    margin-right: 20px;
    background: #ddd;
    box-shadow: 0 0 4px rgba(0,0,0,0.2);
`

export const PersonName = styled.h4`
    font-size: 16px;
`

export const PersonRole = styled.span`
    font-size: 14px;
`