import React from 'react'

import { ChevronDown, Calendar } from 'react-feather'
import { Input, Container, ArrowWrapper, IconWrapper } from './styles'

function DateInput ({ ...rest }) {
    return (
        <Container>
            <IconWrapper>
                <Calendar size={20} color="#bbb" />
            </IconWrapper>

            <Input 
                type="date" 
                {...rest}
            />

            <ArrowWrapper>
                <ChevronDown size={20} color="#111" />
            </ArrowWrapper>
        </Container>
    );
}

export default DateInput