import React from 'react'

import { Container, Line, Section, List, Item, Divider, Copy, IFMS } from './styles'

function Footer() {
    return(
        <Container>
            <Line>
                <Section>
                    <h3>Institucional</h3>
                    <List>
                        <Item><a href="/#quem-somos">Quem somos</a></Item>
                        <Item><a href="/#o-que-fazemos">O que fazemos</a></Item>
                        <Item><a href="/#labs">Laboratórios</a></Item>
                        <Item><a href="/#parceiros">Parceiros</a></Item>
                    </List>
                </Section>

                <Section>
                    <h3>Serviços</h3>
                    <List>
                        <Item><a href="/#equipamentos">Equipamentos</a></Item>
                        <Item><a href="/agendamento">Agendamento</a></Item>
                        <Item><a href="/#contato">Contato</a></Item>
                        <Item><a href="/login">Login</a></Item>
                    </List>
                </Section>

                <Section>
                    <h3>Blog</h3>
                    <List>
                        <Item><a href="/#portfolio">Portfólio</a></Item>
                        <Item><a href="/#eventos">Eventos</a></Item>
                    </List>
                </Section>
            </Line>

            <Divider />

            <Line>
                <Copy>&copy; 2020 IF Maker</Copy>
            </Line>
        </Container>
    );  
}

export default Footer