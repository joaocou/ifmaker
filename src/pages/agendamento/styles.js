import styled from 'styled-components'

export const Container = styled.div`
    padding: 80px 10%;
`

export const Title = styled.h1`
    font-family: 'Poppins', sans-serif;
    font-size: 50px;
    margin-bottom: 40px;

    @media (max-width: 800px) {
        font-size: 30px;
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

    > button {
        margin-right: 20px;
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

export const Divider = styled.div`
    width: 100;
    background: #ddd;
    height: 2px;
    margin: 60px 0;
`

export const Form = styled.form`
    
`

export const FormRow = styled.div`
    display: flex;
    flex-direction: row;

    @media (max-width: 800px) {
        flex-direction: column;
    }   
`

export const InputGroup = styled.div`
    display: flex;
    flex-direction: column;

    margin-bottom: 30px;

    > div select, > div, >div input {
        width: 350px;
    }

    @media (max-width: 800px) {
        > div select, > div, > div input {
            width: 100%;
        }
    }
`

export const Label = styled.label`
    font-size: 16px;
    color: #111;
    font-weight: 700;
    margin-bottom: 10px;
`

export const CalendarInfo = styled.div`
    width: 350px;
    height: 100px;
    background: #f1f1f1;
    padding: 20px;
    font-size: 14px;
    color: #555;
`

export const Box = styled.div`
    width: 350px;
    margin-bottom: 40px;

    @media (max-width: 800px) {
        width: 100%;
    }
`