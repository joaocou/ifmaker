import styled from 'styled-components'

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    @media (max-width: 800px) {
        flex-direction: column;
    }
`

export const FilterList = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 60px;

    div select {
        margin-right: 20px;
    }

    div div div {
        right: 40px;
    }  

    @media (max-width: 800px) {
        div {
            flex: none;
            width: 100%;   
            margin-bottom: 15px;
        }

        div select {
            width: 100%;
            margin-right: 0;
        }

        div div div {
            width: 20px;
            right: 20px;
        }  
    } 
`

export const SectionTitle = styled.h2`
    font-family: 'Poppins', sans-serif;
    font-size: 50px;
    margin-bottom: 40px;

    @media (max-width: 800px) {
        font-size: 30px;
    }
`

export const EventSection = styled.div`
    width: 100%;
    padding: 60px 10%;
    background: #fff;
`


export const Column = styled.div`
    display: flex;
    flex-direction: column;
`

export const Label = styled.span`
    font-size: 16px;
    font-weight: 700;
    color: #555;
    margin-bottom: 20px;
`