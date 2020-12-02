import styled from 'styled-components'

export const Column = styled.div`
    display: flex;
    flex-direction: column;

    margin-right: 140px;

    @media (max-width: 800px) {
        margin: 0;
    }  
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

export const InfoBox = styled.div`
    width: 350px;
    background: #f1f1f1;
    padding: 20px;
    font-size: 14px;
    color: #555;
`

export const Box = styled.div`
    width: 350px;
    margin-bottom: 40px;
    max-height: 350px;
    overflow-y: auto;

    @media (max-width: 800px) {
        width: 100%;
    }
`