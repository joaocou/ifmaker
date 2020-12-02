import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: #fafafa;
    box-shadow: 0 0 4px rgba(0,0,0,0.2);

    display: grid;
    grid-template-columns: auto;
    grid-template-rows: 80px auto;
`

export const Header = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 8%;
`

export const Logo = styled.img`
    height: 40px;
    width: 160px;
`

export const Center = styled.div`
    width: 100%;
    height: 100%; 
    padding: 40px 10%;
    padding-top: 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

export const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;

    > div {
        margin-bottom: 15px;
    }

    > div input {
        background: #fff;
    }
`

export const Title = styled.h1`
    font-size: 36px;
    font-family: 'Poppins', sans-serif;
    margin-bottom: 40px;
`

export const Row = styled.form`
    display: flex;
    flex-direction: row;

    > button {
        margin-right: 20px;
    }
`

export const PassRec = styled.p`
    font-size: 14px;
    margin-top: 20px;
    margin-bottom: 50px;

    > a {
        text-decoration: none;
        font-weight: bold;
    }
`

export const ImageWrapper = styled.div`
    width: 40%;
    height: 80%;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    background: #ccc;
    box-shadow: 0 0 4px rgba(0,0,0,0.2);
    position: absolute;
    top: 10%;
    right: 0;

    @media (max-width: 800px) {
        display: none;
    }

`

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
`

export const InputRow = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 50px!important;

    > input {
        width: 100%;
    }

    > div {
        width: 170px;
    }

    > div:first-child {
        margin-right: 10px;
    }
`

export const Info = styled.p`
    font-size: 14px;
    margin-bottom: 20px;
    width: 350px;
    line-height: 21px;
`