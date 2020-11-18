import { Input, AutoComplete, Button, Form, Table, Tooltip, notification } from 'antd';
import { PlusOutlined } from '@ant-design/icons'
import { useState, useEffect } from 'react';
import columns from './columns';
import data from '../../../data/data.json';

function MaterialsForm({ handleForm, getTotal }) {
    const [material, setMaterial] = useState({
        ref: '',
        name: '',
        price: '',
        heigth: '',
        width: '',
        quantity: '',
    })
    const [list, setList] = useState([]);
    const [area, setArea] = useState('');
    const [unitTotal, setUnitTotal] = useState(0);
    const [key, setKey] = useState(0);
    const [total, setTotal] = useState(0);
    const [allOk, setAllOk] = useState('');

    useEffect(() => {
        calcArea();
        calcTotal();
        calcUnitTotal();
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
    //----------------------------Rellenar Listas-------------------------------------    
    let references = [];
    const refList = () => {
        data.materiales.map(material => {
            references.push({ value: material.ref, label: material.ref })
        })
    }
    refList();

    let materials = [];
    const materialList = () => {
        data.materiales.map(material => {
            materials.push({ value: material.name, label: material.name })
        })
    }
    materialList();


    //----------------------------AutoRellenar--------------------------------------
    const existMaterial = (prop) => {
        data.materiales.map(mat => {
            if (prop === mat.name) {
                setMaterial({
                    ...material,
                    name: mat.name,
                    ref: mat.ref,
                });
                return true;
            }
        })
        return false;
    }
    const existRef = (prop) => {
        data.materiales.map(mat => {
            if (prop === mat.ref) {
                setMaterial({
                    ...material,
                    name: mat.name,
                    ref: mat.ref,
                });
                return true;
            }
        })
        return false;
    }
    //--------------------------Calculo y verficacion de datos -----------------------------------------
    const calcArea = () => {
        const q = parseInt(material.heigth, 10);
        const p = parseInt(material.width, 10);

        if ((!isNaN(q) && !isNaN(p)) && (q != undefined && p != undefined)) {
            setArea(q * p);
        } else {
            setArea('');
        }
    }
    const calcTotal = () => {
        let t = 0;
        list.map(m => {
            const q = parseInt(m.price, 10);
            const p = parseInt(m.quantity, 10);
            t = t + (q * p);
        })
        setTotal(t);
    }
    const calcUnitTotal = () => {
        const q = parseInt(material.price, 10);
        const p = parseInt(material.quantity, 10);

        if ((!isNaN(q) && !isNaN(p)) && (q != undefined && p != undefined)) {
            setUnitTotal(q * p);
        } else {
            setUnitTotal(0);
        }
    }

    const verficarDatos = () => {
        if (material.ref == '' || material.name == ''
            || material.price == ''
            || material.quantity == '') {
            setAllOk('error');
            openNotificationWithIcon('error', 'Campos vacios en A cotizar',
            'Los campos referencia, descripción, precio y cantidad no deben de estar vacíos al momento de agregar un ítem');
            return false;
        }
        return true;
    }

    //-------------------------------------------------------------------------------
    const onChange = e => {
        setAllOk('')
        setMaterial({ ...material, [e.target.name]: e.target.value, });
    };
    const onClick = e => {
        if (verficarDatos()) {
            setKey(key + 1);
            setList([...list, { ...material, area: area, key: key, total: unitTotal }]);
            setMaterial({
                ref: '',
                name: '',
                price: '',
                heigth: '',
                width: '',
                quantity: '',
            })
        }
    }
    const onDelete = (key, e) => {
        e.preventDefault();
        const data = list.filter(item => item.key !== key);
        setList(data);

    }

    const st = {
        
    }

    return (
        <>
            <div className="materialsForm">
                <div className="titleLine">
                    <p>A cotizar</p>
                </div>
                <Form style={{ display: 'flex' }}>
                    <Form.Item validateStatus={allOk} style={{ width: '100px', margin: '0 5px 10px 0' }}>
                        <AutoComplete
                            value={material.ref}
                            placeholder="Ref."
                            options={references}
                            onChange={value => {
                                setAllOk('');
                                setMaterial({ ...material, ref: value });
                                existRef(value);
                            }}
                            allowClear={true}
                        />
                    </Form.Item>
                    <Form.Item validateStatus={allOk} style={{ flex: 'auto', margin: '0 5px 10px 0' }}>
                        <AutoComplete
                            placeholder="Descripción"
                            options={materials}
                            value={material.name}
                            onChange={value => {
                                setAllOk('');
                                setMaterial({ ...material, name: value });
                                existMaterial(value);
                            }}
                            allowClear={true}
                        />
                    </Form.Item>
                    <Tooltip placement="top" title={"Milímetros"}>
                        <Input
                            style={{ width: '100px', margin: '0 5px 10px 0' }}
                            value={material.width}
                            name="width"
                            onChange={onChange}
                            placeholder="Ancho"
                            allowClear={true}
                        />
                    </Tooltip>
                    <Tooltip placement="top" title={"Milímetros"}>
                        <Input
                            style={{ width: '100px', margin: '0 5px 10px 0' }}
                            value={material.heigth}
                            name="heigth"
                            onChange={onChange}
                            placeholder="Alto"
                            allowClear={true}
                        />
                    </Tooltip>
                    <Tooltip placement="top" title={"Milimetros"}>
                        <Input
                            style={{ width: '100px', margin: '0 5px 10px 0' }}
                            value={area}
                            name="area"
                            placeholder="Área"
                        />
                    </Tooltip>
                    <Form.Item validateStatus={allOk} style={{ width: '150px', margin: '0 5px 10px 0' }}>
                        <Tooltip placement="top" title={formatter.format(material.price)}>
                            <Input

                                value={material.price}
                                name="price"
                                onChange={onChange}
                                placeholder="Precio"
                                allowClear={true}
                            />
                        </Tooltip>
                    </Form.Item>
                    <Form.Item validateStatus={allOk} style={{ width: '90px', margin: '0 5px 10px 0' }}>
                        <Input

                            placeholder="Cant."
                            value={material.quantity}
                            name="quantity"
                            onChange={onChange}
                            allowClear={true}
                        />
                    </Form.Item>
                    <p className='unitTotal'>{formatter.format(unitTotal)}</p>
                    <Tooltip placement="top" title={"Añadir"}>
                        <Button type="primary" shape="circle" icon={<PlusOutlined />} onClick={onClick} />
                    </Tooltip>
                </ Form>
                <Table
                    columns={columns(onDelete)}
                    dataSource={list}
                    showHeader={false}
                    /* scroll={{
                        y: 280
                    }} */
                    size='small'
                    pagination={false}
                />

            </div>
        </>
    )
}
export default MaterialsForm;