import styled from 'styled-components'

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 40px;

`

export const SectionTitle = styled.h2`
    font-family: 'Poppins', sans-serif;
    font-size: 50px;

    @media (max-width: 800px) {
        font-size: 30px;
    }
`

export const EquipmentsSection = styled.div`
    width: 100%;
    padding: 60px 10%;
    background: #fff;
`

export const EquipmentRow = styled.div`
    margin-top: 60px;
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 800px) {
        flex-direction: column;
    }
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;

    > a div {
        margin-bottom: 20px;
    }
`