import styled from 'styled-components'

export const Container = styled.div`
    width: 220px;
    height: 40px;
    position: relative;
`

export const Select = styled.select`
    font-family: 'Open Sans', sans-serif;
    height: 40px;
    width: 220px;
    background: #fff;
    border: 2px solid #ddd;
    padding: 8px 20px;
    padding-left: ${props => props.type ? '60' : '20'}px;
    border-radius: 4px;
    appearance: none;
    cursor: pointer;
`

export const Input = styled.input`
    font-family: 'Open Sans', sans-serif;
    height: 40px;
    width: 200px;
    background: #fff;
    border: 2px solid #ddd;
    padding: 8px 20px;
    padding-left: ${props => props.type ? '60' : '20'}px;
    border-radius: 4px;
    appearance: none;
    cursor: pointer;
`

export const ArrowWrapper = styled.div`
    position: absolute;
    top: 10px;
    right: 22px;
    pointer-events: none;
    max-width: 20px;
    background: #fff;
`

export const IconWrapper = styled.div`
    position: absolute;
    left: 22px;
    top: 10px;
    width: 20px;
    pointer-events: none;
`