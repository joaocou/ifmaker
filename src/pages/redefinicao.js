import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

import Input from '../components/Input'
import Button from '../components/Button'
import ButtonSecondary from '../components/ButtonSecondary'

import { Container, Header, Logo, Center, Form, Title, Row, Info, ImageWrapper, Image } from '../styles/pages/login'

export default function Redefinicao() {


    return(
        <div>
            <Head>
                <title>Redefinir senha | IF Maker</title>
            </Head>

            <Container>
                <Header>
                    <a href="/">
                        <Logo src="/logo.svg" alt="IF Maker" />
                    </a>
                </Header>

                <ImageWrapper>
                    <Image src="https://images.unsplash.com/photo-1604798498937-d76c1627b218?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Laboratório" />
                </ImageWrapper>

                <Center>
                    <Form>
                        <Title>Redefinir senha</Title>

                        <Info>Um link com instruções para redefinição de sua senha será enviado para sua caixa de entrada.</Info>

                        <Input
                            iconType="mail"
                            name="email"
                            type="email"
                            placeholder="Seu email cadastrado"
                        />   

                        <Row style={{ marginTop: 40 }}>
                            <Button>Enviar</Button>
                        </Row>
                    </Form>
                </Center>
            </Container>
        </div>
    );
}