import { Input, AutoComplete, Button, Form, Table, Tooltip, notification } from 'antd';
import { PlusOutlined } from '@ant-design/icons'
import { useState, useEffect } from 'react';
import columns from './otrosGastosColumns';
import data from '../../data/data.json';
import NumericInput from '../constants/numericInput'

function OtrosGastosForm({ handleForm, getTotal }) {
    const [otrosG, setOtrosG] = useState({
        description: '',
        price: '',
    })
    const [list, setList] = useState([]);
    const [key, setKey] = useState(0);
    const [allOk, setAllOk] = useState('');
    const [total, setTotal] = useState(0);

    useEffect(() => {
        calcTotal();
        handleForm(list);
        getTotal(total);
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

    const verficarDatos = () => {
        if (otrosG.description == ''
            || otrosG.price == '') {
            setAllOk('error');
            openNotificationWithIcon('error', 'Campos vacios en "Otros gastos"',
                'Los campos "Descripción" y "Precio" no deben de estar vacíos al momento de agregar un ítem');
            return false;
        }
        return true;
    }
    const calcTotal = () => {
        let t = 0;
        list.map(m => {
            const q = parseInt(m.price, 10);
            t = t + q;
        })
        setTotal(t);
    }

    //-------------------------------------------------------------------------------
    /* const onChange = e => {
        setAllOk('')
        setotrosG({ ...otrosG, [e.target.name]: e.target.value, });
    }; */
    const onClick = e => {
        if (verficarDatos()) {
            setKey(key + 1);
            setList([...list, { ...otrosG, key: key }]);
            setOtrosG({
                description: '',
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
                    <p>Otros Gastos</p>
                </div>
                <Form style={{ display: 'flex' }}>
                    <Form.Item validateStatus={allOk} style={{ flex: 'auto', margin: '0 5px 10px 0' }}>
                        <AutoComplete
                            placeholder="*Descripción"
                            value={otrosG.description}
                            onChange={value => {
                                setAllOk('');
                                setOtrosG({ ...otrosG, description: value });
                            }}
                            allowClear={true}
                        />
                    </Form.Item>
                    <Form.Item validateStatus={allOk} style={{ width: '150px', margin: '0 5px 10px 0' }}>
                        <Tooltip placement="top" title={formatter.format(otrosG.price)}>
                            <NumericInput
                                value={otrosG.price}
                                onChange={value => {
                                    setAllOk('');
                                    setOtrosG({ ...otrosG, price: value });
                                }}
                                placeholder="*Precio"
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
export default OtrosGastosForm;