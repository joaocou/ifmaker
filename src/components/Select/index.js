import React from 'react'

import { ChevronDown, MapPin, Calendar, Map, Archive, Settings } from 'react-feather'
import { Container, Select, ArrowWrapper, IconWrapper } from './styles'

function MySelect ({ type, children, ...rest }) {

    const icon = {
        pin: <MapPin size={20} color="#bbb" />,
        calendar: <Calendar size={20} color="#bbb" />,
        map: <Map size={20} color="#bbb" />,
        archive: <Archive size={20} color="#bbb" />,
        gear: <Settings size={20} color="#bbb" />,
    }

    return(
        <Container>
            <IconWrapper>
                {icon[type]}
            </IconWrapper>

            <Select type={type} {...rest}>
                {children}
            </Select>

            <ArrowWrapper>
                <ChevronDown size={20} color="#111" />
            </ArrowWrapper>
        </Container>
    );
}

export default MySelect