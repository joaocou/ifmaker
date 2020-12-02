import styled from 'styled-components'

export const Container = styled.div`
    padding: 80px 0;
    padding-bottom: 40px;
    background: #fff;
`

export const Title = styled.div`
    font-family: 'Poppins', sans-serif;
    font-size: 36px;

    @media (max-width: 800px) {
        font-size: 30px;
    }
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 60px;
    padding: 0 10%;
`

export const PostsRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 40px;
    overflow-x: auto;

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