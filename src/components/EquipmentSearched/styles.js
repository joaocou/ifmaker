import styled from 'styled-components'

export const Container = styled.div`
    height: 40px;
    width: 100%;
    background: #555;
    color: #eee;
    padding-left: 5px;
    padding-right: 20px;
    border-radius: 20px;
    margin-bottom: 10px;
    cursor: pointer;
    
    display: flex;
    justify-content: flex-start;
    align-items: center;

    transition: opacity 0.4s ease;

    :hover {
        opacity: 0.5;
    }
`

export const Title = styled.p`
    font-weight: 600;
    margin-left: 10px;
    font-size: 12px;
`

export const Image = styled.img`
    height: 30px;
    width: 30px;
    border-radius: 15px;
    object-fit: cover;
    background: #eee;
`