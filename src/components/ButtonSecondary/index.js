import React from 'react'

import { Container } from './styles'

function Button ({ href, children, ...rest }) {
    if (href) {
        return (
            <a href={href}>
                <Container {...rest}>
                    {children}
                </Container>
            </a>
        );

    } else {
        return (
            <Container {...rest}>
                {children}
            </Container>
        );
    }
}

export default Button