import React from 'react';

import LineButton from '../../components/LineButton'
import PostItem from '../../components/PostItem'

import { BlogSection, SectionTitle, Row, PostsRow } from './styles'

function Portfolio ({ title, data, children, ...rest }) {

    data.length = 4;

    return (
        <BlogSection id={title.replace(/ /g, '-').toLowerCase()} {...rest}>
            <Row>
                <SectionTitle>{title}</SectionTitle>
                <LineButton href="/portfolio">ver mais</LineButton>
            </Row>

            { children && <Row>{children}</Row> }

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
        </BlogSection>
    );
}

export default Portfolio