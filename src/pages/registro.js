import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

import Input from '../components/Input'
import Button from '../components/Button'
import ButtonSecondary from '../components/ButtonSecondary'

import { Container, Header, Logo, Center, Form, Title, Row, ImageWrapper, Image, InputRow } from '../styles/pages/login'

export default function Registro() {


    return(
        <div>
            <Head>
                <title>Registro | IF Maker</title>
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
                        <Title>Registre-se</Title>

                        <Input
                            iconType="user"
                            name="name"
                            type="text"
                            placeholder="Nome"
                        />  

                        <Input
                            iconType="mail"
                            name="email"
                            type="email"
                            placeholder="Email"
                        />  

                        <InputRow>
                            <Input
                                iconType="lock"
                                name="password"
                                type="password"
                                placeholder="Senha"
                            />  

                            <Input
                                name="password"
                                type="password"
                                placeholder="Confirmar senha"
                            />  
                        </InputRow>

                        <Row>
                            <Button>Registrar</Button>
                            <Link href="/login">
                                <ButtonSecondary>Login</ButtonSecondary>
                            </Link>
                        </Row>
                    </Form>
                </Center>
            </Container>
        </div>
    );
}