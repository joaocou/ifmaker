import styled from 'styled-components'

export const BackImage = styled.img`
    width: 100%;
    height: 542px;
    object-fit: cover;
    position: fixed;
    top: 0;
    z-index: -1;
`

export const MainWrapper = styled.div`
    background: linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.4));
    box-shadow: 0 0 4px rgba(0,0,0,0.2);
    position: relative;
`

export const Container = styled.div`
    padding: 100px 10%;
`

export const Map = styled.img`
    position: absolute;
    right: 10%;
    top: 150px;

    height: 280px;   
    width: 280px;   

    @media (max-width: 800px) {
        height: 130px;   
        width: 130px;   
    }
`

export const Title = styled.h1`
    font-family: 'Poppins', sans-serif;
    font-size: 50px;
    line-height: 55px;
    margin-bottom: 40px;
    color: #fff;
    text-shadow: 0 0 10px rgba(0,0,0,0.2);

    @media (max-width: 800px) {
        font-size: 40px;
    }
`

export const Label = styled.p`
    font-size: 16px;
    margin-bottom: 20px;
    margin-top: 60px;
    font-weight: 600;
    color: #fff;
    text-shadow: 0 0 10px rgba(0,0,0,0.2);

    @media (max-width: 800px) {
        margin-bottom: 10px;
    }
`

export const AgendamentoSection = styled.div`
    background: #fafafa;
    padding: 80px 10%;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 800px) {
        align-items: flex-start;
    }
`

export const Text = styled.p`
    font-size: 16px;
    margin-bottom: 40px;
    color: #555;
    text-align: center;

    @media (max-width: 800px) {
        text-align: left;
    }
`

export const CtaButton = styled.button`
    width: 220px;
    height: 50px;
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.primaryLight};
    font-family: 'Opens Sans', sans-serif;
    font-size: 16px;
    font-weight: 600;
    border: 0;
    border-radius: 30px;
    padding: 0 40px;
    cursor: pointer;
    z-index: 1;
    outline: 0;

    display: flex;
    justify-content: center;
    align-items: center;
`