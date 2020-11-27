import React from 'react'

import { Container, Title, PersonList, PersonItem, PersonAvatar, PersonName, PersonDetails, PersonRole } from './styles'

function Equipe({ data }) {
    return (
        <Container>
            <Title>Equipe</Title>

            <PersonList>
                { data && data.map(person => (
                    <PersonItem>
                        <PersonAvatar src={person.avatar} alt={person.avatar} />
                        <PersonDetails>
                            <PersonName>{person.name}</PersonName>
                            <PersonRole>{person.role}</PersonRole>
                        </PersonDetails>
                    </PersonItem>
                )) }
            </PersonList>
        </Container>
    );
}

export default Equipe;