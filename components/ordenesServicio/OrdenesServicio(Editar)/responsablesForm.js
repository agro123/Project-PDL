import { Input, AutoComplete, Button, Form, Table, Tooltip, notification } from 'antd';
import { PlusOutlined } from '@ant-design/icons'
import { useState, useEffect } from 'react';
import columns from '../../OrdenesServicio(Crear)/responsablesColumns';
import data from '../../../data/data.json';
import NumericInput from '../../constants/numericInput'

function ResponsablesForm({ handleForm, getTotal,dataResponsables }) {
    const [empleado, setEmpleado] = useState({
        name: '',
        price: '',
    })
    const [list, setList] = useState(dataResponsables.map( dm => dm = {...dm, total: dm.price } 
        ));
    const [key, setKey] = useState(0);
    const [total, setTotal] = useState(0);
    const [allOk, setAllOk] = useState('');

    useEffect(() => {
        calcTotal();
        getTotal(total);
        handleForm(list);
    })

    const formatter = new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0
    })
    const openNotificationWithIcon = (status, title, description) => {
        notification[status]({
            message: title,
            description:
                description,
        });
    };

    //--------------------------Calculo y verficacion de datos -----------------------------------------
   
    const calcTotal = () => {
        let t = 0;
        list.map(m => {
            const q = parseInt(m.price, 10);
            t = t + q;
        })
        setTotal(t);
    }

   
    const verficarDatos = () => {
        if (empleado.ref == '' || empleado.name == ''
            || empleado.name == ''
            || empleado.price == '') {
            setAllOk('error');
            openNotificationWithIcon('error', 'Campos vacios en "Responsables del trabajo"',
                'Los campos "Trabajador" y "Salario" no deben de estar vacíos al momento de agregar un empleado');
            return false;
        }
        return true;
    }

   
    const onClick = e => {
        if (verficarDatos()) {
            setKey(key + 1);
            setList([...list, { ...empleado,key: key}]);
            setEmpleado({
                name: '',
                price: '',
            })
        }
    }
    const onDelete = (key, e) => {
        e.preventDefault();
        const data = list.filter(item => item.key !== key);
        setList(data);

    }

    return (
        <>
            <div className="materialsOSForm">
                <div className="titleLine">
                    <p>Responsables Del Trabajo</p>
                </div>
                <Form style={{ display: 'flex' }}>
                    <Form.Item validateStatus={allOk} style={{ flex: 'auto', margin: '0 5px 10px 0' }}>
                        <AutoComplete
                            placeholder="*Trabajador"
                            
                            value={empleado.name}
                            onChange={value => {
                                setAllOk('');
                                setEmpleado({ ...empleado, name: value });
                               
                            }}
                            allowClear={true}
                        />
                    </Form.Item>
                   
                   
                    <Form.Item validateStatus={allOk} style={{ width: '150px', margin: '0 5px 10px 0' }}>
                        <Tooltip placement="top" title={formatter.format(empleado.price)}>
                            <NumericInput
                                value={empleado.price}
                                onChange={value => {
                                    setAllOk('');
                                    setEmpleado({ ...empleado, price: value });
                                }}
                                placeholder="*Salario"
                                allowClear={true}
                            />
                        </Tooltip>
                    </Form.Item>
                    <Tooltip placement="top" title={"Añadir"}>
                        <Button type="primary" shape="circle" icon={<PlusOutlined />} onClick={onClick} />
                    </Tooltip>
                </ Form>
                <Table
                    columns={columns(onDelete)}
                    dataSource={list}
                    showHeader={false}
                    scroll={{
                        y: 150
                    }}
                    size='small'
                    pagination={false}
                />

            </div>
        </>
    )
}
export default ResponsablesForm;