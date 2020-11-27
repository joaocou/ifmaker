import React, { useEffect, useState } from 'react'
import Head from 'next/head'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import ReactMd from 'react-markdown'
import { Facebook, Instagram, Twitter, Linkedin } from 'react-feather'
import { Container, SectionName, Title, Subtitle, ImageWrapper, Image, Row, Column, SocialButton, SocialRow, Content } from './styles';

//
import { posts } from '../../data'

export default function Artigo ({ slug }) {

    let data = posts.filter(post => post.slug === slug);
    data = data[0];
    
    return (
        <div>
            <Head>
                <title>{data.title} | IF Maker</title>
                <meta name="description" content={data.content}/>
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
                                <Facebook size={24} color="#111" />
                            </SocialButton>

                            <SocialButton>
                                <Instagram size={24} color="#111" />
                            </SocialButton>

                            <SocialButton>
                                <Twitter size={24} color="#111" />
                            </SocialButton>

                            <SocialButton>
                                <Linkedin size={24} color="#111" />
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