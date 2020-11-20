import React from 'react'

import { Container, Image, Square, Title } from './styles'

function EquipmentItem ({ image, title, href, ...rest }) {
    return(
        <a href={href} style={{ textDecoration: 'none' }}>
            <Container {...rest}>
                <Square>
                    <Image src={image} alt={title} />
                </Square>

                <Title>{title}</Title>
            </Container>
        </a>
    );
}

export default EquipmentItem