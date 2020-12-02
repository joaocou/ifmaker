import React, { useState } from 'react'
import Head from 'next/head'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Button from '../components/Button'
import ButtonSecondary from '../components/ButtonSecondary'

import { IconAlertTriangle } from 'tabler-icons'

import { 
    Container, 
    Title, 
    Subtitle, 
    AlertBox,
    AlertMessage,
    Row
} from '../styles/pages/agendamento';

import AgendamentoForm from '../sections/AgendamentoForm'

export default function Agendamento () {

    return (
        <div>
            <Head>
                <title>Agendamento | IF Maker</title>
                <meta name="description" content="Gostaria de utilizar algum equipamento para poder realizar o seu projeto? É só preencher o formulário abaixo."/>
            </Head>

            <Header />

            <Container>
                <Title>Agendamento</Title>

                <AlertBox>
                    <Row>
                        <IconAlertTriangle size={50} color="#aaa" stroke={1.5} />
                        <AlertMessage>Para poder realizar um agendamento é necessário estar logado em uma conta antes.</AlertMessage>
                    </Row>

                    <Row>
                        <a href="/login">
                            <Button>Login</Button>
                        </a>
                        <a href="/registro">
                            <ButtonSecondary>Registro</ButtonSecondary>
                        </a>
                    </Row>
                </AlertBox>

                <AgendamentoForm />

            </Container>

            <Footer />
        </div>
    );
}