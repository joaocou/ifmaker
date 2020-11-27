import React, { useState, useEffect } from 'react'

import Select from '../../components/Select'
import EventItem from '../../components/EventItem'
import DateInput from '../../components/DateInput';

import { EventSection, SectionTitle, Row, Column, FilterList, Label, InfoWrapper, Info, Clear } from './styles'

function Eventos ({ data }) {

    data = data.filter(event => event.campus === 'Aquidauana');

    const campi = ["Aquidauana", "Campo Grande", "Corumbá", "Coxim", "Dourados", "Jardim", "Naviraí", "Nova Andradina", "Ponta Porã", "Três Lagoas"];

    //

    const [events, setEvents] = useState(data);
    
    const [date, setDate] = useState('');
    const [city, setCity] = useState(null);

    useEffect(() => {
        const filteredEvents = data.filter(event => 
            (!date || date === event.date) && (!city || city === event.city)
        );

        setEvents(filteredEvents);
    }, [date, city]);


    const hanldeClear = () => {
        setDate('');
        setCity(null);

        document.querySelector('#filters').reset();
    }

    return (
        <EventSection id="eventos">
            <SectionTitle>Eventos</SectionTitle>

            <FilterList id="filters">
                <Label>Filtros</Label>
                <Row>
                    <DateInput 
                        value={date} 
                        onChange={(e) => setDate(e.target.value)}
                    />

                    <Select 
                        type="pin"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    >
                        <option disabled selected hidden>Cidade</option>

                        { campi.map(campus => (
                            <option key={campus} value={campus}>{campus}</option>
                        )) }
                        
                    </Select>

                    { (date || city) && (
                        <Clear name="limpar_filtros" onClick={hanldeClear}>Limpar filtros</Clear>
                    ) }
                </Row>
            </FilterList>

            <Column>
                { events.length > 0 ? events.map((event, index) => (
                    <EventItem 
                        key={index}
                        date={event.date}
                        time={event.time}
                        city={event.city}
                        title={event.title}
                        content={event.content}
                        href="#"
                    />
                )) : (
                    <InfoWrapper>
                        <Info>Nenhum evento encontrado!</Info>
                    </InfoWrapper>
                ) }
            </Column>
        </EventSection>
    );
}

export default Eventos