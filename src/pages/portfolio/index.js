import React, { useState, useEffect } from 'react'
import Head from 'next/head'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Select from  '../../components/Select'
import SearchInput from  '../../components/SearchInput'
import PostItem from '../../components/PostItem'

import { Container, Title, Label, FilterContainer, FilterRow, Section, PostGrid, Clear, InfoWrapper, Info } from './styles';

//
import { posts } from '../../data'

const thePosts = posts;

function Galeria ({ props }) {

    const campi = ["Aquidauana", "Campo Grande", "Corumbá", "Coxim", "Dourados", "Jardim", "Naviraí", "Nova Andradina", "Ponta Porã", "Três Lagoas"];
    const categories = ["Microcontroladores", "Robótica", "Design", "Impressão 3D"];

    const data = thePosts;

    //

    const [posts, setPosts] = useState(data);
    
    const [date, setDate] = useState('');
    const [campus, setCampus] = useState(null);
    const [category, setCategory] = useState(null);

    useEffect(() => {
        const filteredPosts = data.filter(post => 
            (!campus || campus === post.campus) && (!category || category === post.category)
        );

        setPosts(filteredPosts);
    }, [date, campus, category]);


    const hanldeClear = () => {
        setDate('');
        setCampus(null);
        setCategory(null);

        document.querySelector('#filters').reset();
    }

    return (
        <div>
            <Head>
                <title>Portfólio | IF Maker</title>
                <meta name="description" content="O que fazemos, o nosso portfólio!"/>
            </Head>

            <Header />

            <Container>
                <Title>Portfólio</Title>

                <FilterContainer>
                    <Section>
                        <Label>Filtros</Label>

                        <FilterRow id="filters">
                            <Select 
                                type="archive"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                            >
                                <option disabled selected hidden>Categoria</option>

                                { categories.map(category => (
                                    <option key={category} value={category}>{category}</option>
                                )) }
                                
                            </Select>

                            <Select 
                                type="map"
                                value={campus}
                                onChange={(e) => setCampus(e.target.value)}
                            >
                                <option disabled selected hidden>Campus</option>

                                { campi.map(campus => (
                                    <option key={campus} value={campus}>{campus}</option>
                                )) }
                                
                            </Select>

                            { (campus || category) && (
                                <Clear name="limpar_filtros" onClick={hanldeClear}>Limpar filtros</Clear>
                            ) }
                        </FilterRow>
                    </Section>

                    <Section>
                        <SearchInput placeholder="O que você está procurando?" />
                    </Section>
                </FilterContainer>


                <PostGrid>
                    { posts.length > 0 ? posts.map(post => (
                        <PostItem 
                            key={post.title}
                            slug={post.slug}
                            title={post.title}
                            image={post.image}
                        />
                    )) : (
                        <InfoWrapper>
                            <Info>Nenhum artigo encontrado!</Info>
                        </InfoWrapper>
                    ) }
                </PostGrid>

            </Container>

            <Footer />
        </div>
    );
}

export default Galeria