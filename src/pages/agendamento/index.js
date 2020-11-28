import React from 'react'
import Head from 'next/head'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Input from '../../components/Input'
import TextArea from '../../components/TextArea'
import Select from '../../components/Select'
import DateInput from '../../components/DateInput'
import Button from '../../components/Button'
import ButtonSecondary from '../../components/ButtonSecondary'
import CheckBox from '../../components/CheckBox'

import { 
    Container, 
    Title, 
    Subtitle, 
    Row, 
    Column, 
    Divider, 
    Form, 
    InputGroup, 
    Label, 
    CalendarInfo, 
    FormRow, 
    Box 
} from '../../styles/pages/agendamento';

export default function Agendamento () {

    const campi = ["Aquidauana", "Campo Grande", "Corumbá", "Coxim", "Dourados", "Jardim", "Naviraí", "Nova Andradina", "Ponta Porã", "Três Lagoas"];

    return (
        <div>
            <Head>
                <title>Agendamento | IF Maker</title>
                <meta name="description" content="Gostaria de utilizar algum equipamento para poder realizar o seu projeto? É só preencher o formulário abaixo."/>
            </Head>

            <Header />

            <Container>
                <Title>Agendamento</Title>
                <Subtitle>Para poder realizar um agendamento é necessário estar logado em uma conta antes.</Subtitle>

                <Row>
                    <Button>Login</Button>
                    <ButtonSecondary>Registro</ButtonSecondary>
                </Row>

                <Divider />

                <Form>
                    <FormRow>
                        <Column>
                            <InputGroup>
                                <Label>Campus</Label>
                                <Select>
                                    <option disabled selected hidden>Campus</option>

                                    { campi.map(campus => (
                                        <option key={campus} value={campus}>{campus}</option>
                                    )) }
                                </Select>
                            </InputGroup>

                            <InputGroup>
                                <Label>Equipamento</Label>
                                <Input type="text" name="equipment" placeholder="Pesquisar" />
                                <CalendarInfo>
                                    
                                </CalendarInfo>
                            </InputGroup>

                            <InputGroup>
                                <Label>Justificativa</Label>
                                <TextArea type="text" name="justify" />
                            </InputGroup>
                        </Column>

                        <Column>
                            <InputGroup>
                                <Label>Data</Label>
                                <DateInput />
                                <CalendarInfo>
                                    <strong>Disponibilidade:</strong>
                                </CalendarInfo>
                            </InputGroup>

                            <InputGroup>
                                <Label>Horário</Label>
                                <Select>
                                    <option disabled selected hidden>Selecionar</option>

                                    <option value="Manhã">Manhã</option>
                                    <option value="Tarde">Tarde</option>
                                    <option value="Noite">Noite</option>
                                </Select>
                            </InputGroup>
                        </Column>
                    </FormRow>

                    <Box>
                        <CheckBox>Li e concordo com os <a href="#">Termos de Agendamento do IF Maker</a>.</CheckBox>
                    </Box>
                                            
                    <Button>Enviar</Button>
                </Form>

            </Container>

            <Footer />
        </div>
    );
}