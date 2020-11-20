import React from 'react';

import Select from '../../components/Select';
import EventItem from '../../components/EventItem';

import { EventSection, SectionTitle, Row, Column, FilterList, Label } from './styles'

function Eventos ({ data }) {

    data.length = 4;

    const campi = ["Aquidauana", "Campo Grande", "Corumbá", "Coxim", "Dourados", "Jardim", "Naviraí", "Nova Andradina", "Ponta Porã", "Três Lagoas"];

    return (
        <EventSection id="eventos">
            <SectionTitle>Eventos</SectionTitle>

            <FilterList>
                <Label>Filtros</Label>
                <Row>
                    <Select type="calendar">
                        <option disabled selected hidden>Data</option>
                    </Select>

                    <Select type="pin">
                        <option disabled selected hidden>Campus</option>

                        { campi.map(campus => (
                            <option key={campus} value={campus}>{campus}</option>
                        )) }

                    </Select>

                    <Select type="map">
                        <option disabled selected hidden>Cidade</option>

                        { campi.map(campus => (
                            <option key={campus} value={campus}>{campus}</option>
                        )) }
                        
                    </Select>
                </Row>
            </FilterList>

            <Column>
                { data.length > 0 && data.map(event => (
                    <EventItem 
                        key={event.title}
                        date={event.date}
                        time={event.time}
                        place={event.place}
                        title={event.title}
                        content={event.content}
                    />
                )) }
            </Column>
        </EventSection>
    );
}

export default Eventos