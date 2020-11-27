import styled from 'styled-components'

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 60px;
    padding: 0 10%;
`

export const SectionTitle = styled.h2`
    font-family: 'Poppins', sans-serif;
    font-size: 50px;

    @media (max-width: 800px) {
        font-size: 30px;
    }
`

export const BlogSection = styled.div`
    width: 100%;
    padding: 60px 0;
    background: #fafafa;

    p {
        line-height: 24px;
        margin-bottom: 20px;
        width: 600px;
    }

    @media (max-width: 800px) {
        p {
            width: 100%;
        }
    }
`

export const PostsRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    overflow-x: auto;
    margin-top: 40px;

    > a {
        margin: 10px 0;
        margin-right: 20px;
    }

    > a:first-child {
        margin-left: 10%;
    }

    > a:last-child {
        margin-right: 10%;
    }
`