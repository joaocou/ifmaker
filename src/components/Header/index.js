import React, { useState, useEffect } from 'react'
import { Menu, X } from 'react-feather'

import { Container, Logo, List, Item, IconLink } from './styles'

function Header({ transparent }) {

    const [loading, setLoading] = useState(true);
    const [menuOpen, setMenuOpen] = useState(true);

    useEffect(() => {
        setMenuOpen(window.innerWidth > 900);
        setLoading(false);
    }, []);

    const handleNavigation = () => {
        if (window.innerWidth < 900) {
            setMenuOpen(false);
        }
    }

    const links = [
        "Quem somos", 
        "Labs", 
        "O que fazemos", 
        "Equipamentos", 
        "Portfólio", 
        "Eventos", 
        "Parceiros", 
        "Contato"
    ];

    if(loading) {
        return (
            <div style={{ height: 80 }}></div>
        );
    }

    return(
        <Container transparent={transparent}>
            <a href="/"><Logo src="/logo.svg" alt="IF Maker" /></a>

            <List menuOpen={menuOpen}>

                { links.map(link => (
                    <Item key={link} transparent={transparent}>
                        <a 
                            onClick={handleNavigation} 
                            href={`/#${link.replace(/ /g, '-').toLowerCase()}`}
                        >
                            {link}
                        </a>
                    </Item>
                )) }

            </List>

            <IconLink onClick={() => menuOpen ? setMenuOpen(false) : setMenuOpen(true)}>
                { menuOpen    
                    ? <X size={24} color={transparent ? '#fff' : '#111'} /> 
                    : <Menu size={24} color={transparent ? '#fff' : '#111'} /> 
                }
            </IconLink>
        </Container>
    );  
}

export default Header