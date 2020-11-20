import styled from 'styled-components'

export const SectionTitle = styled.h2`
    font-family: 'Poppins', sans-serif;
    font-size: 50px;
    margin-bottom: 40px;

    @media (max-width: 800px) {
        font-size: 30px;
    }
`

export const LabSection = styled.div`
    width: 100%;
    background: #fafafa;
    padding-bottom: 60px;
`

export const SectionWrapper = styled.div`
    padding: 60px 10% 60px 10%;
    
    select, div {
        display: none;
    }

    @media (max-width: 800px) {
        select {
            display: block;
            width: 100%;
        }
    }
`

export const List = styled.ul`
    list-style: none;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 800px) {
        display: none;
    }
`

export const Item = styled.a`
    font-family: 'Open Sans', sans-serif;
    font-size: 13px;
    font-weight: 600;
    padding: 8px 15px;
    background: ${props => props.active ? props.theme.colors.primaryLight : 'none'};
    color: ${props => props.active ? props.theme.colors.primary : '#111'};
    border-radius: 4px;
    border: 0;
    cursor: pointer;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 800px) {
        flex-direction: column;
    }
`

export const Column = styled.div`
    width: 47%;

    display: flex;
    flex-direction: column;

    @media (max-width: 800px) {
        width: 100%;
    }
`

export const DetailsColumn = styled.div`
    padding-right: 10%;
    width: 48%;

    display: flex;
    flex-direction: column;

    @media (max-width: 800px) {
        padding: 40px 10%;
        width: 100%;

        div {
            justify-content: flex-start;
            align-items: flex-start;
        }

    }
`

export const TitleRow = styled.div`
    flex: none;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
`

export const Title = styled.h3`
    font-family: 'Poppins', sans-serif;
    font-size: 24px;
    width: 200px;
`

export const PersonList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const PersonItem = styled.div`
    width: 240px;
    margin-bottom: 20px;

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
`

export const PersonName = styled.h4`
    font-size: 14px;
`

export const PersonRole = styled.span`
    font-size: 12px;
`

export const Map = styled.img`
    width: 200px;

    @media (max-width: 800px) {
        margin-top: 40px;
        width: 100%;
    }
`