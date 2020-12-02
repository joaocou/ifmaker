import React from 'react'
import Head from 'next/head'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import ReactMd from 'react-markdown'
import { IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin, IconBrandTwitter } from 'tabler-icons'
import { 
    Container, 
    SectionName, 
    Title, 
    Subtitle, 
    ImageWrapper, 
    Image, 
    Row, 
    Column, 
    SocialButton, 
    SocialRow, 
    Content 
} from '../../styles/pages/artigo';

//
import { posts } from '../../data'

export default function Artigo ({ slug }) {

    let data = posts.filter(post => post.slug === slug);
    data = data[0];
    
    return (
        <div>
            <Head>
                <title>{data.title} | IF Maker</title>
                <meta name="description" content={data.content.split(0,40)}/>
                <meta property="og:image" content={data.image} />
            </Head>

            <Header />

            <Container>
               
                <Row>
                    <Column>
                        <SectionName>> {data.section}</SectionName>
                        <Title>{data.title}</Title>
                        <Subtitle>{data.category} - Campus {data.campus}</Subtitle>

                        <SocialRow>
                            <SocialButton>
                                <IconBrandFacebook size={24} color="#111" />
                            </SocialButton>

                            <SocialButton>
                                <IconBrandInstagram size={24} color="#111" />
                            </SocialButton>

                            <SocialButton>
                                <IconBrandTwitter size={24} color="#111" />
                            </SocialButton>

                            <SocialButton>
                                <IconBrandLinkedin size={24} color="#111" />
                            </SocialButton>
                        </SocialRow>
                    </Column>
                    <Column>
                        <ImageWrapper>
                            <Image src={data.image} alt={data.title} />
                        </ImageWrapper>
                    </Column>
                </Row>

                <Content>
                    <ReactMd>
                        {data.content}
                    </ReactMd>
                </Content>

            </Container>

            <Footer />
        </div>
    );
}

export async function getServerSideProps(context) {
    const { slug } = context.query;

    return { 
        props: { slug }
    }
}