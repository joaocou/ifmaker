import React from 'react'

import { IconSearch } from 'tabler-icons'
import { Container, Input, IconWrapper } from './styles'

function SearchInput ({ onClick, ...rest }) {

    return(
        <Container>
            <Input {...rest} />

            <IconWrapper name="pesquisa" onClick={onClick}>
                <IconSearch size={20} color="#111" />
            </IconWrapper>
        </Container>
    );
}

export default SearchInput