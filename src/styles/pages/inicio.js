import styled from 'styled-components'

export const Video = styled.video`
    position: fixed;
    min-height: 100vh;
    min-width: 100vw;
    z-index: -1;
    top: 50%; 
    left: 50%;
    transform: translate(-50%, -50%);
`

export const HomeSection = styled.div`
    height: 100vh;
    background: linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.4));
    position: relative;
`

export const Wrapper = styled.div`
    flex: none;
    height: 100%;
    padding: 40px 10%;  
    padding-bottom: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const Small = styled.span`
    font-size: 16px;
    font-weight: 600;
    color: #fff;
    margin-bottom: 20px;
    text-shadow: 0 0 10px rgba(0,0,0,0.2);
`

export const Title = styled.h1`
    font-family: 'Poppins', sans-serif;
    font-size: 60px;
    line-height: 70px;
    width: 480px;
    color: #fff;
    margin-bottom: 40px;
    text-shadow: 0 0 10px rgba(0,0,0,0.2);

    @media (max-width: 800px) {
        font-size: 40px;
        line-height: 45px;
        width: 100%;
    }
`

export const CtaButton = styled.button`
    width: 250px;
    height: 55px;
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.primaryLight};
    font-family: 'Opens Sans', sans-serif;
    font-size: 16px;
    font-weight: 600;
    border: 0;
    border-radius: 30px;
    padding: 0 40px;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    z-index: 1;
    outline: 0;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;
`

export const Slice = styled.img`
    width: 100%;
    position: absolute;
    bottom: -1px;
`

export const PartnerSection = styled.div`
    overflow: hidden;
    background: #fff;
    width: 100%;
    height: 250px;

    display: flex;
    justify-content: center;
    align-items: center;

    > img {
        margin: 10px 60px;
    }

    @media (max-width: 800px) {
        flex-direction: column;

        height: auto;
        padding: 40px 0;

        > img {
            margin: 40px 10px;
        }
    }
`