import styled from 'styled-components'

export const Row = styled.div`
    display: flex;
    flex-direction: row;

    div {
        margin-right: 20px; 
    }

    div div:last-child {
        margin-right: 0;
    }

    @media (max-width: 800px) {
        flex-direction: column;

        :last-child {
            margin-bottom: 20px;
        }
        
        > div {
            margin: 0;
            margin-bottom: 15px;
        }
    }
`

export const FilterList = styled.form`
    display: flex;
    flex-direction: column;
    margin-bottom: 60px;
`

export const SectionTitle = styled.h2`
    font-family: 'Poppins', sans-serif;
    font-size: 36px;
    margin-bottom: 40px;

    @media (max-width: 800px) {
        font-size: 30px;
    }
`

export const EventSection = styled.div`
    width: 100%;
    padding: 80px 10%;
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

export const InfoWrapper = styled.span`
    display: flex;
    justify-content: flex-start;
    padding: 30px 0;

    @media (max-width: 800px) {
        justify-content: center;
    }
`

export const Info = styled.span`
    font-size: 16px;
    font-weight: 600;
    color: #555;
    margin-bottom: 20px;
`

export const Clear = styled.button`
    font-family: 'Open Sans', sans-serif;
    height: 40px;
    background: #fff;
    border: 0;
    font-weight: 600;
    color: #555;
    padding: 8px 20px;
    padding-left: 20px;
    border-radius: 4px;
    cursor: pointer;
    margin-right: 20px;

    outline: 0;

    :focus {
        box-shadow: 0 0 0px 3px rgba(0,0,0,0.1);
    }

    @media (max-width: 800px) {
        margin: 0;
    }
`