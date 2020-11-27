import React, { useEffect, useState } from 'react'
import Head from 'next/head'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Select from  '../../components/Select'
import EquipmentItemCollapse from '../../components/EquipmentItemCollapse'

import { 
    Container, 
    Title, 
    Label, 
    FilterContainer, 
    FilterRow, 
    Section, 
    EquipmentList, 
    Subtitle,
    Clear,
    InfoWrapper,
    Info
} from './styles';

//
import { equipments } from '../../data'
const theEquipments = equipments;

function Equipamentos () {

    const campi = ["Aquidauana", "Campo Grande", "Corumbá", "Coxim", "Dourados", "Jardim", "Naviraí", "Nova Andradina", "Ponta Porã", "Três Lagoas"];

    //

    const [equipments, setEquipments] = useState(theEquipments);

    const [category, setCategory] = useState(null);
    const [campus, setCampus] = useState(null);

    useEffect(() => {
        const filteredEquipments = equipments.filter(equipment => 
            (!campus || campus === equipment.campus) && (!category || category === equipment.category)
        );

        setEquipments(filteredEquipments);
    }, [campus, category]);


    const hanldeClear = () => {
        setCategory(null);
        setCampus(null);

        document.querySelector('#filters').reset();
    }

    return (
        <div>
            <Head>
                <title>Equipamentos | IF Maker</title>
                <meta name="description" content="Gostaria de agendar o uso de algum deles? Clique no botão de [+] para exibir mais informações e ver opções de agendamento."/>
            </Head>

            <Header />

            <Container>
                <Title>Equipamentos</Title>
                <Subtitle>Gostaria de agendar o uso de algum deles? Clique no botão de [+] para exibir mais informações e ver opções de agendamento.</Subtitle>

                <FilterContainer id="filters">
                    <Section>
                        <Label>Filtros</Label>

                        <FilterRow>
                            <Select 
                                type="gear"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                            >
                                <option disabled selected hidden>Tipo</option>

                                <option value="Impressora 3D">Impressora 3D</option>
                                <option value="Serra">Serra</option>
                                <option value="Cortadora de vinil">Cortadora de vinil</option>
                                <option value="Cortadora a laser">Cortadora a laser</option>
                                <option value="Fresadora">Fresadora</option>
                                
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
                </FilterContainer>


                <EquipmentList>
                    { equipments.length > 0 ? equipments.map(equipment => (
                        <EquipmentItemCollapse 
                            key={equipment.title}
                            title={equipment.title}
                            image={equipment.image}
                            content={equipment.content}
                        />
                    )) : (
                        <InfoWrapper>
                            <Info>Nenhum equipamento encontrado!</Info>
                        </InfoWrapper>
                    )  }
                </EquipmentList>

            </Container>

            <Footer />
        </div>
    );
}

export default Equipamentos