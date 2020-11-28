import styled from 'styled-components'

export const Container = styled.div`
    height: 350px;
    width: 100%;
    position: relative;
    box-shadow: 0 0 4px rgba(0,0,0,0.2);

    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;

    @media (max-width: 800px) {
        border-radius: 0;
    }
`

export const Items = styled.div`
    height: 100%;
    width: 100%;
    background: #111;
    overflow: hidden;
    display: flex;

    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;

    @media (max-width: 800px) {
        border-radius: 0;
    }
`

export const Item = styled.div`
    flex: none;
    height: 100%;
    width: 100%;

    @media (max-width: 800px) {
        width: 100%;
    }
`

export const Image = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
    transition: 0.5s ease-in-out;
`

export const IconWrapper = styled.button`
    position: absolute;
    right: 10px;
    top: 145px;
    background: none;
    border: 0;

    outline: 0;

    outline: 0;

    :focus {
        box-shadow: 0 0 0px 3px rgba(255,255,255,0.1);
    }

    svg {
        cursor: pointer;
    }
`