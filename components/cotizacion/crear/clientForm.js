import { Input, AutoComplete, Form } from 'antd';
import data from '../../../data/data.json'
import { useState, useEffect } from 'react';
import NumericInput from '../../constants/numericInput'


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
        idList();
        clientList();
    })

    //----------------------------Rellenar Listas-------------------------------------    
    let clientes = [];
    const clientList = () => {
        data.clientes.map(cliente => {
            clientes.push({ value: cliente.name, label: cliente.name })
        })
    }
    clientList();

    let ids = [];
    const idList = () => {
        data.clientes.map(cliente => {
            ids.push({ value: cliente.id, label: cliente.id })
        })
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
                return true;
            }
        }
        return false;
    }

    //-------------------------------------------------------------------------------
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
                <Form>
                    <AutoComplete
                        style={style}
                        value={client.name}
                        placeholder="Nombre"
                        options={clientes}
                        name="name"
                        onChange={value => {
                            setClient({ ...client, name: value });
                            existName(value);
                        }}
                        allowClear={true}
                    />
                    <AutoComplete
                        style={{ width: '195px', margin: '0 0 2% 0' }}
                        placeholder="Identificación"
                        options={ids}
                        value={client.id}
                        onChange={value => {
                            setClient({ ...client, id: value });
                            existId(value);
                        }}
                        name="id"
                        allowClear={true}
                    />
                    <Input
                        style={style}
                        placeholder="Dirección"
                        value={client.address}
                        name="address"
                        onChange={onChange}
                        allowClear={true}
                    />
                    <Input
                        style={{ width: '195px', margin: '0 0 2% 0' }}
                        placeholder="Teléfono"
                        onChange={onChange}
                        name="phoneNumb"
                        value={client.phoneNumb}
                        allowClear={true}
                    />
                    <Input
                        style={{ width: '195px', margin: '0 2% 0 0' }}
                        placeholder="Correo electronico"
                        name="email"
                        value={client.email}
                        onChange={onChange}
                        allowClear={true}
                    />
                </Form>
            </div>
        </>
    )
}

export default ClienteForm;