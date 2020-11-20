import React from 'react'

import { User, Mail, Info } from 'react-feather'
import { Container, Input, IconWrapper } from './styles'

function MyInput ({ type, ...rest }) {

    const icon = {
        user: <User size={20} color="#bbb" />,
        mail: <Mail size={20} color="#bbb" />,
        info: <Info size={20} color="#bbb" />,
    }

    return(
        <Container>
            <Input {...rest} />
            <IconWrapper>
                { icon[type] }
            </IconWrapper>

        </Container>
    );
}

export default MyInput