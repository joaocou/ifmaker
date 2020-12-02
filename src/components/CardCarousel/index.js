import React, { useState } from 'react'

import { Container, Item, Card, Title, Row, Dot } from './styles'

function CardCarousel({ data }) {
    
    const [transform, setTransform] = useState(0);

    const handleNavigate = (page) => {
        const newPosition = page * -100;

        setTransform(newPosition);
    }

    return(
        <>
            <Container>
                { data.length > 0 && data.map(item => (
                    <Item 
                        key={item.title} 
                        style={{ transform: `translateX(${transform}%)` }}
                    >
                        <Card>
                            <Title>{item.title}</Title>
                            <p>{item.text}</p>
                        </Card>
                    </Item>
                )) }
            </Container>
            
            <Row>
                { data.length > 0 && data.map((item, index) => (
                    <Dot 
                        key={item.title} 
                        onClick={() => handleNavigate(index)}
                        active={index === (transform / -100)}
                        name={`Navegar para ${index}`}
                    />
                )) }
            </Row>
        </>
    );  
}

export default CardCarousel