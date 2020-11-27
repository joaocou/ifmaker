import React from 'react'

import { Search } from 'react-feather'
import { Container, Input, IconWrapper } from './styles'

function SearchInput ({ onClick, ...rest }) {

    return(
        <Container>
            <Input {...rest} />

            <IconWrapper name="pesquisa" onClick={onClick}>
                <Search size={20} color="#111" />
            </IconWrapper>
        </Container>
    );
}

export default SearchInput