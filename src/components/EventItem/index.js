import React from 'react'

import { Clock, MapPin } from 'react-feather'

import { Container, Column, Calendar, Month, Day, Year, Small, Row, Item, Title, Excerpt } from './styles'

function EventItem ({ date, time, city, title, content, href, ...rest }) {
    
    date = date.split('-');

    const months = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez']

    const day = date[2];
    const month = months[date[1] - 1];
    const year = date[0];

    return(
        <Container {...rest}>
            <Column>
                <Calendar>
                    <Month>{month}</Month>
                    <Day>{day}</Day>
                    <Year>{year}</Year>
                </Calendar>
            </Column>

            <Column>
                <Row>
                    <Item>
                        <Clock size={12} color="#555" />
                        <Small>{time}</Small>
                    </Item>

                    <Item>
                        <MapPin size={12} color="#555" />
                        <Small>{city}</Small>
                    </Item>
                </Row>

                <Title href={href}>{title}</Title>
                <Excerpt>{content}</Excerpt>
            </Column>
        </Container>
    );
}

export default EventItem