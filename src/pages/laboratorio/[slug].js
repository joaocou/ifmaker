import React from 'react'
import Head from 'next/head'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import { ArrowRight } from 'react-feather'
import { MainWrapper, Container, Map, Title, Label, AgendamentoSection, Text, CtaButton, BackImage } from '../../styles/pages/laboratorio';

import Equipe from '../../sections/Equipe'
import Portfolio from '../../sections/PortfolioSmall';
import Equipamentos from '../../sections/EquipamentosSmall'
import Eventos from '../../sections/EventosSmall';

//
import { labs, posts, equipments, events } from '../../data'


export default function Laboratorio ({ slug }) {

    let data = labs.filter(lab => lab.slug === slug);
    data = data[0];

    return (
        <div>
            <Head>
                <title>Laboratório de {data.name} | IF Maker</title>
                <meta name="description" content="O que fazemos, o nosso portfólio!"/>
            </Head>

            <MainWrapper>
                <Header transparent={true} />

                <Container>
                    <Map src={data.map} alt="Mapa" />

                    <Label>Laboratório</Label>
                    <Title>Campus<br />{data.name}</Title>
                </Container>

                <BackImage src={data.images[0].url} alt={data.images[0].alt} />
            </MainWrapper>

            <Equipe data={data.team} />

            <Portfolio data={posts} />

            <Equipamentos data={equipments} />

            <AgendamentoSection>
                <Text>Gostaria de utilizar algum equipamento para poder realizar o seu projeto?<br />Agende o uso dele na página de agendamento!</Text>
                <a href="/agendamento">
                    <CtaButton>
                        Agendamento
                        <ArrowRight size={30} color="#E1EECC" style={{ marginLeft: 10 }} />
                    </CtaButton>
                </a>
            </AgendamentoSection>

            <Eventos data={events} />

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