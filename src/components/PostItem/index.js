import React from 'react'

import { Container, Wrapper, Title, Image } from './styles'

function PostCard ({ slug, title, image, ...rest }) {
    return(
        <Container {...rest}>
            <Image src={image} alt={title} />

            <Wrapper>
                <Title>{title}</Title>
            </Wrapper>
        </Container>
    );
}

export default PostCard