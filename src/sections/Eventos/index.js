import React, { useState, useEffect } from 'react'

import Select from '../../components/Select'
import EventItem from '../../components/EventItem'
import DateInput from '../../components/DateInput';

import { EventSection, SectionTitle, Row, Column, FilterList, Label, InfoWrapper, Info, Clear } from './styles'


const campi = ["Aquidauana", "Campo Grande", "Corumbá", "Coxim", "Dourados", "Jardim", "Naviraí", "Nova Andradina", "Ponta Porã", "Três Lagoas"];
//

function Eventos ({ data }) {

    const [events, setEvents] = useState(data);
    
    const [date, setDate] = useState('');
    const [campus, setCampus] = useState(null);
    const [city, setCity] = useState(null);

    useEffect(() => {
        const filteredEvents = data.filter(event => 
            (!date || date === event.date) && (!campus || campus === event.campus) && (!city || city === event.city)
        );

        filteredEvents.reverse();
        
        if (filteredEvents.length > 5) {
            filteredEvents.length = 5;
        }

        filteredEvents.reverse();


        setEvents(filteredEvents);
    }, [date, campus, city]);


    const hanldeClear = () => {
        setDate('');
        setCampus(null);
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
                        type="campus"
                        value={campus}
                        onChange={(e) => setCampus(e.target.value)}
                    >
                        <option disabled selected hidden>Campus</option>

                        { campi.map(campus => (
                            <option key={campus} value={campus}>{campus}</option>
                        )) }

                    </Select>

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

                    { (date || campus || city) && (
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