import { Input, AutoComplete, Form, Tooltip } from 'antd';
import data from '../../data/data.json'
import { useState, useEffect } from 'react';
/*
import NumericInput from '../../constants/numericInput' 
import FormItemInput from 'antd/lib/form/FormItemInput';*/

const ClienteForm = ({ handleForm, allOk, clientsField, inputCliente}) => {
    const [client, setClient] = useState(inputCliente);
    useEffect(() => {
        handleForm(client);
    })

    //----------------------------Rellenar Listas-------------------------------------    

    const onChange = e => {
        setClient({ ...client, [e.target.name]: e.target.value });
    };

    const style = { width: '195px', margin: '0 2% 2% 0' };

    return (
        <>
            <div className="clientForm">
                <div className="titleLine">
                    <p>Cliente</p>
                </div>
                <Form style={{ display: 'flex' }}>
                    <Form.Item validateStatus={allOk} style={style}>
                        <Tooltip placement="top" title={"Empresa o Persona natural"} >
                            <AutoComplete
                                value={client.name}
                                placeholder="Nombre"
                                name="name"
                                onChange={value => {
                                    clientsField();
                                    setClient({ ...client, name: value });
                                }}
                                allowClear={true}
                            />
                        </Tooltip>
                    </Form.Item>
                    <Form.Item validateStatus={allOk} style={{ width: '195px', margin: '0 0 2% 0' }}>
                        <Tooltip placement="top" title={"C.C. o NIT"} >
                            <AutoComplete
                                placeholder="Identificación"
                                value={client.id}
                                onChange={value => {
                                    clientsField();
                                    setClient({ ...client, id: value });
                            
                                }}
                                name="id"
                                allowClear={true}
                            />
                        </Tooltip>
                    </Form.Item>
                </Form>
                <AutoComplete
                    style={style}
                    placeholder="Dirección"
                    defaultValue= {client.address}
                    value={client.address}
                    name="address"
                    onChange={value => {
                        clientsField();
                        setClient({ ...client, address: value });
                    }}
                    allowClear={true}
                />
                <AutoComplete
                    style={{ width: '195px', margin: '0 0 2% 0' }}
                    placeholder="Teléfono"
                    defaultValue= {client.phoneNumb}
                    name="phoneNumb"
                    onChange={value => {
                        clientsField();
                        setClient({ ...client, phoneNumb: value });
                    }}
                    value={client.phoneNumb}
                    allowClear={true}
                />
                <AutoComplete
                    style={{ width: '195px', margin: '0 2% 0 0' }}
                    placeholder="Correo electronico"
                    defaultValue= {client.email}
                    name="email"
                    onChange={value => {
                        clientsField();
                        setClient({ ...client, email: value });
                    }}
                    value={client.email}
                    allowClear={true}
                />

            </div>
        </>
    )
}

export default ClienteForm;