import styled from 'styled-components'

export const Container = styled.div`
    padding: 80px 10%;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    > div:first-child {
        padding-right: 80px;
    }

    @media (max-width: 800px) {
        flex-direction: column;

        > div:first-child {
            padding: 0;
            margin-bottom: 60px;
        }
    }
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;

    @media (max-width: 800px) {
        width: 100%;
    }
`

export const SectionName = styled.span`
    font-size: 16px;
    margin-bottom: 20px;
    color: #333;
`

export const Title = styled.h1`
    font-family: 'Poppins', sans-serif;
    font-size: 40px;
    line-height: 50px;

    @media (max-width: 800px) {
        font-size: 30px;
        line-height: 40px;
    }
`

export const Subtitle = styled.span`
    font-size: 16px;
    margin-top: 20px;
    font-weight: 600;

    @media (max-width: 800px) {
        margin-bottom: 10px;
    }
`

export const ImageWrapper = styled.div`
    height: 320px;
    width: 100%;
    border-radius: 8px;
    box-shadow: 0 0 4px rgba(0,0,0,0.2);
`

export const Image = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 8px;
    object-fit: cover;
`

export const SocialRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    margin-top: 60px;

    > a:first-child {
        margin-left: 0;
    }

    > a:last-child {
        margin-right: 0;
    }
`

export const SocialButton = styled.a`
    height: 50px;
    width: 50px;
    background: #ddd;
    border-radius: 4px;
    margin: 0 10px;
    border: 0;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;
`

export const Content = styled.div`
    width: 100%;
    margin-top: 100px;

    p {
        margin-bottom: 20px;
        line-height: 26px;
    }

    h2, h3, h4, h5 {
        margin-top: 20px;
        margin-bottom: 20px;
    }
`