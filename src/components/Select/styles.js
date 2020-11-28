import styled from 'styled-components'

export const Container = styled.div`
    width: 220px;
    height: 40px;
    position: relative;

    @media (max-width: 800px) {
        width: 100%;
    }
`

export const Select = styled.select`
    font-family: 'Open Sans', sans-serif;
    height: 40px;
    width: 220px;
    border: 1px solid #bbb;
    background: #fafafa;
    padding: 8px 20px;
    border-radius: 4px;
    padding-left: ${props => props.type ? '60' : '20'}px;
    appearance: none;
    cursor: pointer;

    outline: 0;

    :focus {
        box-shadow: 0 0 0px 3px rgba(0,0,0,0.1);
    }

    @media (max-width: 800px) {
        width: 100%;
    }
`

export const ArrowWrapper = styled.div`
    position: absolute;
    top: 5px;
    right: 20px;
    height: 30px;
    width: 30px;
    pointer-events: none;
    background: #fafafa;

    display: flex;
    justify-content: center;
    align-items: center;
`

export const IconWrapper = styled.div`
    position: absolute;
    left: 22px;
    top: 10px;
    width: 20px;
    pointer-events: none;
`