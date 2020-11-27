import React, { useState } from 'react'

import { ChevronRight } from 'react-feather'
import { Container, Items, Item, Image, IconWrapper } from './styles'

function ImageCarousel({ data }) {

    const [transform, setTransform] = useState(0);

    const handleNext = () => {
        const currentPage = (transform / -100) + 1;

        if(currentPage < data.length) {
            setTransform(transform - 100);
        } else {
            setTransform(0);
        }
    }

    return(
        <Container>
            <Items>
                { data.length > 0 && data.map(image => (
                    <Item key={image.alt}>
                        <Image 
                            src={image.url} 
                            alt={image.alt} 
                            style={{ transform: `translateX(${transform}%)` }}
                        />
                    </Item>
                )) }
            </Items>
            
            <IconWrapper onClick={handleNext} name="Próximo">
                <ChevronRight size={60} color="#fff" />
            </IconWrapper>

        </Container>
    );  
}

export default ImageCarousel