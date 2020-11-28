import React from 'react'

import { Container, Image, Square, Title } from './styles'

function EquipmentItem ({ image, title, ...rest }) {
    return(
        <Container {...rest}>
            <Square>
                <Image src={image} alt={title} />
            </Square>

            <Title>{title}</Title>
        </Container>
    );
}

export default EquipmentItem