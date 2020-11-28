import React from 'react'

import { IconBuildingSkyscraper, IconMapPin, IconArchive, IconSettings, IconChevronDown } from 'tabler-icons'
import { Container, Select, ArrowWrapper, IconWrapper } from './styles'

function MySelect ({ type, children, ...rest }) {

    const icon = {
        gear: <IconSettings size={20} color="#bbb" />,
        archive: <IconArchive size={20} color="#bbb" />,
        pin: <IconMapPin size={20} color="#bbb" />,
        campus: <IconBuildingSkyscraper size={20} color="#aaa" />
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
                <IconChevronDown size={20} color="#111" />
            </ArrowWrapper>
        </Container>
    );
}

export default MySelect