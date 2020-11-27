import React from 'react';

import LineButton from '../../components/LineButton'
import EquipmentItem from '../../components/EquipmentItem'

import { EquipmentsSection, SectionTitle, Row, EquipmentRow, Column } from './styles'

function Equipamentos ({ data }) {

    data.length = 6;

    const firstColumn = data.splice(0,3);
    const secondColumn = data.splice(-3);

    return (
        <EquipmentsSection id="equipamentos">
            <Row>
                <SectionTitle>Equipamentos</SectionTitle>
                <LineButton href="/equipamentos">ver mais</LineButton>
            </Row>

            <EquipmentRow>
                <Column>
                    { firstColumn.length > 0 && firstColumn.map(item => (
                        <EquipmentItem 
                            key={item.title}
                            title={item.title}
                            image={item.image}
                            href={`/equipamentos`}
                        />
                    )) }
                </Column>

                <Column>
                    { secondColumn.length > 0 && secondColumn.map(item => (
                        <EquipmentItem 
                            key={item.title}
                            title={item.title}
                            image={item.image}
                            href="#"
                        />
                    )) }
                </Column>
            </EquipmentRow>
        </EquipmentsSection>
    );
}

export default Equipamentos