import React, { useState } from 'react'

import ReactMd from 'react-markdown'
import Button from '../Button'

import { PlusSquare, MinusSquare } from 'react-feather'
import { Container, Header, Image, Square, Title, IconWrapper, Content } from './styles'

function EquipmentItem ({ content, image, title, href, ...rest }) {

    const [open, setOpen] = useState(false);

    const toggleContent = () => open ? setOpen(false) : setOpen(true);

    return(
        <Container {...rest} id={title.replace(/ /g, '-').toLowerCase()}>
            <Header>
                <Square>
                    <Image src={image} alt={title} />
                </Square>

                <Title>{title}</Title>

                <IconWrapper name="mais" onClick={toggleContent}>
                    { open ? <MinusSquare size={24} color="#111" /> : <PlusSquare size={24} color="#111" /> }
                </IconWrapper>
            </Header>

            <Content open={open}>
                <ReactMd>
                    {content}
                </ReactMd>

                <Button href="/agendamento">Agendar uso</Button>
            </Content>
        </Container>
    );
}

export default EquipmentItem