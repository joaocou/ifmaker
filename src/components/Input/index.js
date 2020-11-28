import React from 'react'

import { IconUser, IconMail, IconInfoCircle } from 'tabler-icons'
import { Container, Input, IconWrapper } from './styles'

function MyInput ({ iconType, ...rest }) {

    const icon = {
        user: <IconUser size={20} color="#aaa" />,
        mail: <IconMail size={20} color="#aaa" />,
        info: <IconInfoCircle size={20} color="#aaa" />,
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