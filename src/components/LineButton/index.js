import React from 'react'

import { ArrowRight } from 'react-feather'
import { Container, Row, Line, Text } from './styles'

function LineButton ({ children }) {
    return(
        <Container>
            <Row>
                <Text>{children}</Text>
                <ArrowRight size={20} color="#22974B" />
            </Row>
            <Row>
                <Line />
            </Row>
        </Container>
    );
}

export default LineButton