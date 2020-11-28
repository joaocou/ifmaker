import styled from 'styled-components'

export const Container = styled.a`
    flex: none;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
    
    position: relative;
    height: 240px;
    width: 250px;
    background: #000;
    border-radius: 20px;
    box-shadow: 0 0 4px rgba(0,0,0,0.2);
    transition: box-shadow 0.4s ease;
    cursor: pointer;

    :hover {
        box-shadow: 0 0 10px rgba(0,0,0,0.5);
        opacity: 1;
    }
`

export const Wrapper = styled.div`
    width: 100%;
    flex: 1;
`

export const Title = styled.h3`
    color: #fff;
    font-size: 19px;
    font-weight: 700;
    font-family: 'Poppins', sans-serif;
    text-shadow: 0 0 10px rgba(0,0,0,0.2);
    
    width: 180px;
    position: absolute;
    bottom: 30px;
    left: 30px;
`

export const Image = styled.img`
    opacity: 0.6;
    height: 100%;
    width: 100%;
    border-radius: 20px;
    object-fit: cover;
    transition: opacity 0.4s;
`