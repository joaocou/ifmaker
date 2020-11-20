import styled from 'styled-components'

export const Container = styled.header`
    height: 80px;
    width: 100%;
    padding: 0px 8%;
    background: ${props => props.transparent ? 'transparent' : '#fafafa'};
    border-bottom: ${props => props.transparent ? 0 : '1px solid #ddd'};
    overflow-x: auto;

    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

export const Logo = styled.img`
    height: 40px;
    width: 160px;
`

export const List = styled.ul`
    list-style: none;

    display: ${props => props.menuOpen ? "flex" : "none"};
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 800px) { 
        position: absolute;
        width: 90%;
        height: auto;
        top: 70px;
        left: 5%;
        background: #111;
        border-radius: 20px;
        padding: 40px 0;
        box-shadow: 0 0 10px rgba(0,0,0,0.2);
        z-index: 2;

        flex-direction: column;
        justify-content: flex-start;
    }
`

export const Item = styled.li`
    a {
        font-size: 14px;
        font-weight: 600;
        color: ${props => props.transparent ? '#fff' : '#111'};
        text-decoration: none;
        text-transform: uppercase;
        padding: 10px 15px;
    }

    @media (max-width: 800px) { 
        a {
            font-size: 18px;
            color: #fff;
            padding: 20px 60px;
        }
    }
`

export const IconLink = styled.span`
    display: none;  
    cursor: pointer;

    @media (max-width: 800px) { 
        display: block; 
    }
`