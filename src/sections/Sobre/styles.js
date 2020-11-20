import styled from 'styled-components'

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
    padding-left: 10%;
    width: 47%;

    display: flex;
    flex-direction: column;

    @media (max-width: 800px) {
        padding-right: 10%;
        width: 100%;
    }
`

export const CarouselColumn = styled.div`
    padding-right: 10%;
    width: 47%;

    display: flex;
    flex-direction: column;

    @media (max-width: 800px) {
        width: 100%;
        padding: 0;
        padding-top: 40px;
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

export const AboutSection = styled.div`
    width: 100%;
    padding: 60px 0;
    background: #fafafa;

    p {
        line-height: 24px;
        margin-bottom: 20px;
        width: 100%;
    }
`