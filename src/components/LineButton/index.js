import React from 'react'
import Link from 'next/link'

import { ArrowRight } from 'react-feather'
import { Container, Row, Line, Text } from './styles'

function LineButton ({ children, ...rest }) {
    return(
        <a {...rest} style={{ textDecoration: 'none' }}>
            <Container>
                <Row>
                    <Text>{children}</Text>
                    <ArrowRight size={20} color="#22974B" />
                </Row>
                <Row>
                    <Line />
                </Row>
            </Container>
        </a>
    );
}

export default LineButton