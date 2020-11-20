import styled from 'styled-components'

export const Form = styled.form`
    flex: none;
    display: flex;
    flex-direction: column;
    align-items: center;    

    div > div:last-child {
        margin: 0;
    }

    button {
        width: 200px;
        margin-top: 60px;
        margin-bottom: 60px;
    }

    @media (max-width: 800px) {
        width: 100%; 

        button {
            width: 100%;
        }
    }
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;

    margin-right: 40px; 
    
    div {
        margin-bottom: 20px;
    }

    @media (max-width: 800px) {
        margin: 0; 
        margin-bottom: 20px;
    }
`

export const Row = styled.div`
    display: flex;

    @media (max-width: 800px) {
        flex-direction: column;
        width: 100%;
    }
`

export const SectionTitle = styled.h2`
    font-family: 'Poppins', sans-serif;
    font-size: 35px;
    text-align: center;
    margin-top: 40px;

    @media (max-width: 800px) {
        font-size: 30px;
    }
`

export const Description = styled.span`
    color: #444;
    margin-top: 20px;
    margin-bottom: 60px;
    text-align: center;

    @media (max-width: 800px) {
        width: 260px;
    }
`

export const ContactSection = styled.div`
    width: 100%;
    padding: 60px 10%;
    background: #fafafa;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`