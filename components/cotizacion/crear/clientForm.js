import { Input, AutoComplete, Form } from 'antd';
import data from '../../../data/data.json'
import { useState, useEffect } from 'react';
import NumericInput from '../../constants/numericInput'
import { urlObjectKeys } from 'next/dist/next-server/lib/utils';

const ClienteForm = ({ handleForm }) => {
    const [client, setClient] = useState({
        name: '',
        id: '',
        email: '',
        address: '',
        phoneNumb: ''
    });
    useEffect(() => {
        handleForm(client);
    })

    //----------------------------Rellenar Listas-------------------------------------    
    let clientes = [];
    const clientList = () => {
        for (let i = 0; i < data.clientes.length; i++) {
            clientes.push(
                {
                    value: data.clientes[i].name,
                    label: data.clientes[i].name
                }
            )
        }
    }
    clientList();

    let ids = [];
    const idList = () => {
        for (let i = 0; i < data.clientes.length; i++) {
            ids.push(
                {
                    value: data.clientes[i].id,
                    label: data.clientes[i].id
                }
            )
        }
    }
    idList();

    //----------------------------AutoRellenar--------------------------------------
    const existName = (prop) => {
        for (let i = 0; i < data.clientes.length; i++) {
            if (prop === data.clientes[i].name) {
                setClient({
                    name: data.clientes[i].name,
                    id: data.clientes[i].id,
                    phoneNumb: data.clientes[i].phoneNumb,
                    address: data.clientes[i].address,
                    email: data.clientes[i].email
                });
                return true;
            }
        }
        return false;
    }
    const existId = (prop) => {
        for (let i = 0; i < data.clientes.length; i++) {
            if (prop === data.clientes[i].id) {
                setClient({
                    name: data.clientes[i].name,
                    id: data.clientes[i].id,
                    phoneNumb: data.clientes[i].phoneNumb,
                    address: data.clientes[i].address,
                    email: data.clientes[i].email
                });
                console.log(client)
                return true;
            }
        }
        return false;
    }

    //-------------------------------------------------------------------------------

    const onSaveName = value => {
        setClient({ ...client, name: value });
        existName(value);
    };
    const onSaveId = value => {
        setClient({ ...client, id: value });
        existId(value);
    };

    const onSaveAddress = e => {
        setClient({ ...client, address: e.target.value });
    };

    const onSavePhoneNumb = e => {
        setClient({ ...client, phoneNumb: e.target.value });
    };

    const onSaveEmail = e => {
        setClient({ ...client, email: e.target.value });
    };

    const style = { width: '195px', margin: '0 2% 2% 0' };

    return (
        <>
            <div className="clientForm">
                <div className="titleLine">
                    <p>Cliente</p>
                </div>
                <Form>
                    <AutoComplete
                        style={style}
                        value={client.name}
                        placeholder="Nombre"
                        options={clientes}
                        name="name"
                        onChange={onSaveName}
                        allowClear={true}
                    />
                    <AutoComplete
                        style={{ width: '195px', margin: '0 0 2% 0' }}
                        placeholder="Identificación"
                        options={ids}
                        value={client.id}
                        onChange={onSaveId}
                        name="id"
                        allowClear={true}
                    />
                    <Input
                        style={style}
                        placeholder="Dirección"
                        value={client.address}
                        name="address"
                        onChange={onSaveAddress}
                        allowClear={true}
                    />
                    <Input
                        style={{ width: '195px', margin: '0 0 2% 0' }}
                        placeholder="Teléfono"
                        onChange={onSavePhoneNumb}
                        name="phoneNumb"
                        value={client.phoneNumb}
                        allowClear={true}
                    />
                    <Input
                        style={{ width: '195px', margin: '0 2% 0 0' }}
                        placeholder="Correo electronico"
                        name="email"
                        value={client.email}
                        onChange={onSaveEmail}
                        allowClear={true}
                    />
                </Form>
            </div>
        </>
    )
}

export default ClienteForm;