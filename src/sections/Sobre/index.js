import React from 'react';

import ReactMarkdown from 'react-markdown'
import CardCarousel from '../../components/CardCarousel'

import { AboutSection, Row, Column, CarouselColumn, SectionTitle } from './styles'

function QuemSomos ({ data }) {
    return (
        <AboutSection id="quem-somos">
            <Row>
                <Column>
                    <SectionTitle>Quem somos</SectionTitle>
                    <ReactMarkdown>
                        {data.content}
                    </ReactMarkdown>
                </Column>

                <CarouselColumn>
                    <CardCarousel data={data.cards}/>
                </CarouselColumn>
            </Row>
        </AboutSection>
    );
}

export default QuemSomos