import React, { useEffect, useState } from 'react'
import Head from 'next/head'

import Labs from '../sections/Labs'
import Sobre from '../sections/Sobre'
import Portfolio from '../sections/Portfolio'
import Equipamentos from '../sections/Equipamentos'
import Eventos from '../sections/Eventos'
import Contato from '../sections/Contato'

import Header from '../components/Header'
import Footer from '../components/Footer'

import { ArrowRight } from 'react-feather'
import { CtaButton, HomeSection, Small, Title, Video, Wrapper, Slice, PartnerSection } from './styles'

//
import { about, labs, posts, equipments, events } from './data'

function Home() {

    return(
        <div>
            <Head>
                <title>IF Maker | O laboratório maker do IFMS</title>
            </Head>

            <HomeSection>
                <Header transparent />

                <Wrapper>
                    <Small>Conheça</Small>
                    <Title>O laboratório maker do IFMS.</Title>
                    <CtaButton>
                        Assistir ao vídeo
                        <ArrowRight size={30} color="#E1EECC" style={{ marginLeft: 10 }} />
                    </CtaButton>
                </Wrapper>

                <Video loop autoPlay>
                    <source src="/video.mp4" type="video/mp4" />
                </Video>

                <Slice src="/slice.svg" alt="/" />
            </HomeSection>

            <Sobre data={about} />

            <Labs data={labs} />

            <Portfolio data={posts} title="O que fazemos">
                <p>O IF Maker possibilita que pessoas da comunidade interna e externa dos campi do IFMS possam projetar e desenvolver suas ideias de forma criativa e cooperativa. O objetivo principal é a disseminação do conhecimento técnico fornecendo estímulo para a difusão do empreendedorismo local.</p>
            </Portfolio>

            <Equipamentos
                data={equipments}
            />

            <Portfolio data={posts} title="Portfólio" style={{ background: '#fff' }} />

            <Eventos data={events} />

            <PartnerSection id="parceiros">
                <img src="/ifms.png" alt="IFMS" />
                <img src="/ifms.png" alt="IFMS" />
                <img src="/ifms.png" alt="IFMS" />
                <img src="/ifms.png" alt="IFMS" />
            </PartnerSection>

            <Contato />

            <Footer />

        </div>
    );
}

export default Home