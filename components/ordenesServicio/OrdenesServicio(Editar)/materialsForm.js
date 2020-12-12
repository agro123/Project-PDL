import { Input, AutoComplete, Button, Form, Table, Tooltip, notification } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useState, useEffect } from 'react';
import columns from '../../OrdenesServicio(Crear)/materialsColumns';
import data from '../../../data/data.json';
import NumericInput from '../../constants/numericInput';

function MaterialsForm({ handleForm, getTotal, dataMaterials }) {
    const [material, setMaterial] = useState({
        ref: '',
        name: '',
        price: '',
        length: '',
        quantity: ''
    })
    const [list, setList] = useState(dataMaterials.map( dm => dm = {...dm, key: dataMaterials.indexOf(dm)}
    ));

    const [unitTotal, setUnitTotal] = useState(0);
    const [key, setKey] = useState(0);
    const [total, setTotal] = useState(0);
    const [allOk, setAllOk] = useState('');

    useEffect(() => {
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
            openNotificationWithIcon('error', 'Campos vacios en "Materiales"',
                'Los campos "Referencia", "Material", "Cantidad" y "Precio" no deben de estar vacíos al momento de agregar un Material');
            return false;
        }
        return true;
    }

    //-------------------------------------------------------------------------------
    /* const onChange = e => {
        setAllOk('')
        setMaterial({ ...material, [e.target.name]: e.target.value, });
    }; */
    const onClick = e => {
        if (verficarDatos()) { 
            setKey(key + 1);
            setList([...list, { ...material, key: key, total: unitTotal }]);
            setMaterial({
                ref: '',
                name: '',
                price: '',
                length: '',
                quantity: '',
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
                    <p>Materiales</p>
                </div>
                <Form style={{ display: 'flex' }}>
                    <Form.Item validateStatus={allOk} style={{ width: '100px', margin: '0 5px 10px 0' }}>
                        <AutoComplete
                            value={material.ref}
                            placeholder="*Ref."
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
                            placeholder="*Material"
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
                        <NumericInput
                            style={{ width: '100px', margin: '0 5px 10px 0' }}
                            value={material.length}
                            onChange={value => {
                                setAllOk('');
                                setMaterial({ ...material, length: value });
                            }}
                            placeholder="Longitud"
                            allowClear={true}
                        />
                    </Tooltip>
                    <Form.Item validateStatus={allOk} style={{ width: '90px', margin: '0 5px 10px 0' }}>
                        <Tooltip placement="top" title="Cantidad">
                            <NumericInput
                                placeholder="*Cant."
                                value={material.quantity}
                                onChange={value => {
                                    setAllOk('');
                                    setMaterial({ ...material, quantity: value });
                                }}
                                allowClear={true}
                            />
                        </Tooltip>
                    </Form.Item>
                    <Form.Item validateStatus={allOk} style={{ width: '150px', margin: '0 5px 10px 0' }}>
                        <Tooltip placement="top" title={formatter.format(material.price)}>
                            <NumericInput
                                value={material.price}
                                onChange={value => {
                                    setAllOk('');
                                    setMaterial({ ...material, price: value });
                                }}
                                placeholder="*Precio"
                                allowClear={true}
                            />
                        </Tooltip>
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
export default MaterialsForm;