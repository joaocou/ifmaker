import React, { useState, useEffect } from 'react';

import Input from '../../components/Input'
import TextArea from '../../components/TextArea'
import Select from '../../components/Select'
import DateInput from '../../components/DateInput'
import Button from '../../components/Button'
import CheckBox from '../../components/CheckBox'

import { 
    Column, 
    Form, 
    InputGroup, 
    Label, 
    InfoBox, 
    FormRow, 
    Box 
} from './styles';

//
const campi = ["Aquidauana", "Campo Grande", "Corumbá", "Coxim", "Dourados", "Jardim", "Naviraí", "Nova Andradina", "Ponta Porã", "Três Lagoas"];
import { equipments } from '../../data'
import EquipmentSearched from '../../components/EquipmentSearched';
//

function AgendamentoForm() {
    
    const [equipment, setEquipment] = useState('');
    const [searchedEquipments, setSearchedEquipments] = useState(null);

    const handleEquipmentSearch = () => {
        if (equipment) {
            const response = equipments.filter(e => e.title.toLowerCase().includes(equipment.toLowerCase()));

            setSearchedEquipments(response);
        } else {
            setSearchedEquipments(null);
        }
    }

    useEffect(() => {
        handleEquipmentSearch();
    }, [equipment]);

    return (
        <Form>
            <FormRow>
                <Column>
                    <InputGroup>
                        <Label>Campus</Label>
                        <Select>
                            <option disabled selected hidden>Campus</option>

                            { campi.map(campus => (
                                <option key={campus} value={campus}>{campus}</option>
                            )) }
                        </Select>
                    </InputGroup>

                    <InputGroup>
                        <Label>Equipamento</Label>
                        <Input 
                            type="text" 
                            name="equipment" 
                            placeholder="Pesquisar" 
                            value={equipment}
                            autoComplete="off"
                            onChange={e => setEquipment(e.target.value)}
                        />
                        
                        { searchedEquipments && (
                            <InfoBox>
                                { searchedEquipments.length > 0 ? searchedEquipments.map(item => (
                                    <EquipmentSearched
                                        onClick={() => setEquipment(item.title)}
                                        title={item.title}
                                        image={item.image}
                                    />
                                )) : <p>Nada encontrado</p> }
                            </InfoBox>
                        ) }

                    </InputGroup>

                    <InputGroup>
                        <Label>Justificativa</Label>
                        <TextArea type="text" name="justify" />
                    </InputGroup>
                </Column>

                <Column>
                    <InputGroup>
                        <Label>Data</Label>
                        <DateInput />
                    </InputGroup>

                    <InputGroup>
                        <Label>Horário</Label>
                        <Select>
                            <option disabled selected hidden>Selecionar</option>

                            <option value="Manhã">Manhã</option>
                            <option value="Tarde">Tarde</option>
                            <option value="Noite">Noite</option>
                        </Select>
                    </InputGroup>

                    <InputGroup>
                        <Label>Disponibilidade</Label>
                        <InfoBox>
                            
                        </InfoBox>
                    </InputGroup>

                </Column>
            </FormRow>

            <Box>
                <CheckBox>Li e concordo com os <a href="#">Termos de Agendamento do IF Maker</a>.</CheckBox>
            </Box>
                                    
            <Button>Enviar</Button>
        </Form>
    );
}

export default AgendamentoForm