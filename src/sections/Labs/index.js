import React, { useState } from 'react'

import ImageCarousel from '../../components/ImageCarousel'
import LineButton from '../../components/LineButton'
import Select from '../../components/Select';

import { 
    SectionTitle, 
    LabSection, 
    List, 
    Item, 
    SectionWrapper, 
    TitleRow, 
    Title, 
    DetailsColumn, 
    PersonList, 
    PersonItem, 
    PersonAvatar, 
    PersonDetails, 
    PersonName, 
    PersonRole, 
    Map, 
    Row, 
    Column 
} from './styles'

export default function Labs({ data }) {

    const [currentLab, setCurrentLab] = useState(0);

    return(
        <LabSection id="labs">
            <SectionWrapper>
                <SectionTitle>Labs</SectionTitle>

                <List>
                    { data.length > 0 && data.map((lab, index) => (
                        <li key={index}>
                            <Item 
                                active={index === currentLab} 
                                onClick={() => setCurrentLab(index)}
                             >
                                 {lab.name}
                            </Item>
                        </li>
                    )) }
                </List> 

                <Select 
                    type="pin"
                    value={currentLab} 
                    onChange={(e) => setCurrentLab(e.target.value)}
                >
                    { data.length > 0 && data.map((lab, index) => (
                        <option value={index} key={index}>
                            {lab.name}
                        </option>
                    )) }
                </Select>
            </SectionWrapper>

            <Row>
                <Column>
                    <ImageCarousel data={data[currentLab].images} />
                </Column>

                <DetailsColumn>
                    <TitleRow>
                        <Title>Campus {data[currentLab].name}</Title>
                        <LineButton 
                            href={`/laboratorio/${data[currentLab].slug}`}
                        >
                            ver mais
                        </LineButton>
                    </TitleRow>
                    
                    <Row>
                        <PersonList>
                            { data.length > 0 && data[currentLab].team.map(person => (
                                <PersonItem key={person.name}>
                                    <PersonAvatar src={person.avatar} alt={person.name} />
                                    <PersonDetails>
                                        <PersonName>{person.name}</PersonName>
                                        <PersonRole>{person.role}</PersonRole>
                                    </PersonDetails>
                                </PersonItem>
                            )) }
                        </PersonList>

                        <Map src={data[currentLab].map} alt="Mapa" />
                    </Row>

                </DetailsColumn>
            </Row>
        </LabSection>
    );
}

