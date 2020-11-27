import React from 'react'

import LineButton from '../../components/LineButton'
import PostItem from '../../components/PostItem'

import { Container, Title, Row, PostsRow } from './styles'

function PortfolioSmall({ data }) {

    data.length = 4;

    return (
        <Container>
            <Row>
                <Title>O que fazemos</Title>
                <LineButton href="/portfolio">ver mais</LineButton>
            </Row>

            <PostsRow>
                { data.length > 0 && data.map(post => (
                    <PostItem 
                        key={post.title}
                        title={post.title}
                        image={post.image}
                        href={`/artigo/${post.slug}`}
                    />
                )) }
            </PostsRow>
        </Container>
    );
}

export default PortfolioSmall;