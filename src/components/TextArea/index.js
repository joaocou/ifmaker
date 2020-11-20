import React from 'react'

import { Container, Input } from './styles'

function Select({ ...rest }) {
    return(
        <Container>
            <Input {...rest} />
        </Container>
    );
}

export default Select