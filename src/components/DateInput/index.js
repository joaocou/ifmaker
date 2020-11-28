import React from 'react'

import { IconChevronDown, IconCalendar } from 'tabler-icons'
import { Input, Container, ArrowWrapper, IconWrapper } from './styles'

function DateInput ({ ...rest }) {
    return (
        <Container>
            <IconWrapper>
                <IconCalendar size={20} color="#aaa" />
            </IconWrapper>

            <Input 
                type="date" 
                placeholder="Date"
                {...rest}
            />

            <ArrowWrapper>
                <IconChevronDown size={20} color="#111" />
            </ArrowWrapper>
        </Container>
    );
}

export default DateInput