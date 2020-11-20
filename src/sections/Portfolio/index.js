import React from 'react';

import LineButton from '../../components/LineButton'
import PostCard from '../../components/PostCard'

import { BlogSection, SectionTitle, Row, PostsRow } from './styles'

function Portfolio ({ title, data, children, ...rest }) {
    return (
        <BlogSection id={title.replace(/ /g, '-').toLowerCase()} {...rest}>
            <Row>
                <SectionTitle>{title}</SectionTitle>
                <LineButton>ver mais</LineButton>
            </Row>

            { children && <Row>{children}</Row> }

            <PostsRow>
                { data.length > 0 && data.map(post => (
                    <PostCard 
                        key={post.title}
                        title={post.title}
                        image={post.image}
                    />
                )) }
            </PostsRow>
        </BlogSection>
    );
}

export default Portfolio