import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 40px;

    > div:first-child {
        margin-right: 40px;
    }
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
`

export const Row = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 5px;
`

export const Calendar = styled.div`
    height: 80px;
    width: 80px;
    border-radius: 4px;
    background: ${props => props.theme.colors.primaryLight};

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Day = styled.span`
    font-size: 24px;
    font-weight: 700;
    color: ${props => props.theme.colors.primary};
`

export const Month = styled.span`
    font-size: 12px;
    font-weight: 700;
    color: ${props => props.theme.colors.primary};
`

export const Year = styled.span`
    font-size: 12px;
    font-weight: 700;
    color: ${props => props.theme.colors.primary};
`

export const Item = styled.div`
    flex: none;
`

export const Small = styled.span`
    font-size: 12px;
    color: #555;
    font-weight: 600;
    margin-left: 6px;
    margin-right: 20px;
`

export const Title = styled.a`
    text-decoration: none;
    font-size: 18px;
    font-weight: 700;
    color: #111;
    margin-bottom: 5px;
    cursor: pointer;

    @media (max-width: 800px) {
        font-size: 16px;
    }
`

export const Excerpt = styled.span`
    font-size: 14px;
    color: #555;

    @media (max-width: 800px) {
        display: none;
    }
`