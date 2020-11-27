import React from 'react';

import Input from '../../components/Input'
import TextArea from '../../components/TextArea'
import Button from '../../components/Button';

import { ContactSection, SectionTitle, Description, Form, Column, Row } from './styles'

function Contato () {
    return (
        <ContactSection id="contato">
            <SectionTitle>Entre em contato!</SectionTitle>
            <Description>Use o formulário abaixo para poder falar com a gente.</Description>

            <Form>
                <Row>
                    <Column>
                        <Input 
                            type="text" 
                            name="name" 
                            placeholder="Nome" 
                            typeIcon="user" 
                            required
                        />
                        <Input 
                            type="email" 
                            name="email" 
                            placeholder="Email" 
                            typeIcon="mail" 
                            required
                        />
                        <Input 
                            type="text" 
                            name="subject" 
                            placeholder="Assunto" 
                            typeIcon="info" 
                            required
                        />
                    </Column>

                    <Column>
                        <TextArea 
                            type="text"
                            name="message"
                            placeholder="Mensagem"
                            required
                        />
                    </Column>
                </Row>

                <Button type="submit">Enviar mensagem</Button>
            </Form>
        </ContactSection>
    );
}

export default Contato