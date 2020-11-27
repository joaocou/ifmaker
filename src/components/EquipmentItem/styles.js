import styled from 'styled-components'

export const Container = styled.a`
    width: 100%;
    display: flex;
    align-items: center;
    position: relative;
    padding: 20px;
    text-decoration: none;
`

export const Square = styled.div`
    flex: none;
    width: 80px;
    height: 80px;
    border-radius: 8px;
    background: #f1f1f1;

    display: flex;
    justify-content: center;
    align-items: center;
`

export const Title = styled.h3`
    font-size: 18px;
    width: 260px;
    margin-left: 60px;

    font-weight: 700;
    color: #111;
    
    a {
        text-decoration: none;
    }

    @media (max-width: 800px) {
        width: 100%;
    }
`

export const Image = styled.img`
    max-height: 120px;
    max-width: 120px;
  
`