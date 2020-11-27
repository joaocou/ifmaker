import React from 'react'

import { User, Mail, Info } from 'react-feather'
import { Container, Input, IconWrapper } from './styles'

function MyInput ({ iconType, ...rest }) {

    const icon = {
        user: <User size={20} color="#bbb" />,
        mail: <Mail size={20} color="#bbb" />,
        info: <Info size={20} color="#bbb" />,
    }

    return(
        <Container>
            <Input iconType={iconType} {...rest} />

            { iconType && (
                <IconWrapper>
                    { icon[iconType] }
                </IconWrapper>
            ) }
        </Container>
    );
}

export default MyInput