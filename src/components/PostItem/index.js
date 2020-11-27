import React from 'react'
import Link from 'next/link'

import { Container, Wrapper, Title, Image } from './styles'

function PostCard ({ slug, title, image, ...rest }) {
    return(
        <a {...rest}>
            <Container>
                <Image src={image} alt={title} />

                <Wrapper>
                    <Title>{title}</Title>
                </Wrapper>
            </Container>
        </a>
    );
}

export default PostCard