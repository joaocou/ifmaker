import styled from 'styled-components'

export const Container = styled.header`
    width: 100%;
    padding: 60px 8%;
    background: #111;
    color: #777;
    box-shadow: 0 0 4px rgba(0,0,0,0.2);
`

export const Line = styled.div`
    display: flex;

    @media (max-width: 800px) { 
        flex-direction: column;
    }
`

export const Section = styled.div`
    margin-bottom: 30px;
    width: 200px;
    
    h3 {
        font-size: 18px;
        font-family: 'Poppins', sans-serif;
        margin-bottom: 20px;
    }
`

export const List = styled.ul`
    list-style: none;
`

export const Item = styled.li`
    a {
        font-size: 14px;
        font-weight: 600;
        color: #777;
        text-decoration: none;
    }
`

export const Divider = styled.div`
    border: 1px solid #222;
    width: 100%;
    margin-bottom: 30px;
`

export const Copy = styled.span`
    font-size: 14px;
    color: #777;
    font-weight: 600;
`