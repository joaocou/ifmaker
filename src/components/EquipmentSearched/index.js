import React from 'react';

import { Container, Image, Title } from './styles';

function EquipmentSearched({ title, image, ...rest }) {
    return (
        <Container {...rest}>
            <Image src={image} alt={title} />

            <Title>{title}</Title>
        </Container>
    );
}

export default EquipmentSearched;