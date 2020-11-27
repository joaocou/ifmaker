import React from 'react'

import { Container, Image, Square, Title } from './styles'

function EquipmentItem ({ image, href, title, ...rest }) {
    return(
        <Container href="/equipamentos" {...rest}>
            <Square>
                <Image src={image} alt={title} />
            </Square>

            <Title>{title}</Title>
        </Container>
    );
}

export default EquipmentItem