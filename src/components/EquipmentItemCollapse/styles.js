import styled from 'styled-components'

export const Container = styled.div`
    height: auto;
    border-bottom: 1px solid #ddd;
`

export const Header = styled.div`
    width: 100%;
    height: 130px;
    display: flex;
    align-items: center;
    position: relative;
    padding: 20px;
    margin: 20px 0;

    @media (max-width: 800px) {
        height: 100px;
    }
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

    @media (max-width: 800px) {
        width: 60px;
        height: 60px;
    }
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
        width: 60%;
        font-size: 14px;
        margin-left: 40px;
    }
`

export const Image = styled.img`
    max-height: 120px;
    max-width: 120px;

    @media (max-width: 800px) {
        max-width: 100px;
        max-height: 100px;
    }
  
`

export const IconWrapper = styled.button`
    background: none;
    border: 0;
    position: absolute;
    top: 53px;  
    right: 20px;   
    outline: 0;
    cursor: pointer;

    @media (max-width: 800px) {
        top: 38px;
        right: 0;
    }
`

export const Content = styled.div`
    width: 100%;
    padding: 40px;
    
    padding-left: 160px;
    background: #fafafa;
    font-size: 14px;

    display: ${props => props.open ? 'block' : 'none'};

    p {
        margin-bottom: 20px;
        line-height: 26px;
    }

    h2, h3, h4, h5 {
        margin-top: 20px;
        margin-bottom: 20px;
    }

    ul {
        margin-bottom: 20px;
    }

    ul li {
        margin-left: 40px;
    }

    a button {
        margin-top: 40px;
    }

    @media (max-width: 800px) {
        padding: 20px;
    }
`