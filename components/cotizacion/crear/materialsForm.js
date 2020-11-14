import { Input, AutoComplete, Button, Form, Table,Tooltip } from 'antd';
import { PlusOutlined } from '@ant-design/icons'
import { useState, useEffect } from 'react';
import columns from './columns';
import data from '../../../data/data.json';

function MaterialsForm(props) {
    const [material, setMaterial] = useState({
        ref: '',
        name: '',
        price: '',
        heigth: '',
        width: '',
        quantity: '',
        saleValue: ''
    })
    const [list, setList] = useState([]);
    const [area, setArea] = useState('');
    const [key, setKey] = useState(0)


    useEffect(() => {
        updateMaterial(material);
        updateList(list);
        console.log(list)
        calcArea();
    })
    const updateList = (l) => { setList(l) };
    const updateMaterial = (m) => { setMaterial(m) };

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
                    price: mat.price
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
                    price: mat.price
                });
                return true;
            }
        })
        return false;
    }
    //-------------------------------------------------------------------------------
    function calcArea() {
        const q = parseInt(material.heigth, 10);
        const p = parseInt(material.width, 10);

        if ((!isNaN(q) && !isNaN(p)) && (q != undefined && p != undefined)) {
            setArea(q * p);
        } else {
            setArea('');
        }
    }

    const verficarDatos = () => {
        if (material.ref == '' || material.name == '' || material.price == '' || material.saleValue == ''
            || material.quantity == '') {
            console.log('error');
            return false;
        }
        return true;
    }

    //-------------------------------------------------------------------------------
    const onChange = e => {
        setMaterial({ ...material, [e.target.name]: e.target.value, });
    };
    const onClick = e => {
        if (verficarDatos()) {
            setKey(key + 1);
            setList([...list, { ...material, area: area, key: key }]);
            setMaterial({
                ref: '',
                name: '',
                price: '',
                heigth: '',
                width: '',
                quantity: '',
                saleValue: ''
            })
        }
    }
    const onDelete = (key, e) => {
        e.preventDefault();
        const data = list.filter(item => item.key !== key);
        console.log("data::::", data)
        setList(data);

    }

    return (
        <>
            <div className="materialsForm">
                <div className="titleLine">
                    <p>Materiales</p>
                </div>
                <Form style={{ display: 'flex' }}>
                    <AutoComplete
                        value={material.ref}
                        style={{ width: '100px', margin: '0 5px 10px 0' }}
                        placeholder="Ref."
                        options={references}
                        onChange={value => {
                            setMaterial({ ...material, ref: value });
                            existRef(value);
                        }}
                        allowClear={true}
                    />
                    <AutoComplete
                        style={{ flex: 'auto', margin: '0 5px 10px 0' }}
                        placeholder="Descripción"
                        options={materials}
                        value={material.name}
                        onChange={value => {
                            setMaterial({ ...material, name: value });
                            existMaterial(value);
                        }}
                        allowClear={true}
                    />
                    <Tooltip placement="top" title={"Milimetros"}>
                    <Input
                        style={{ width: '90px', margin: '0 5px 10px 0' }}
                        value={material.width}
                        name="width"
                        onChange={onChange}
                        placeholder="Ancho"
                        allowClear={true}
                    />
                    </Tooltip>
                    <Tooltip placement="top" title={"Milimetros"}>
                    <Input
                        style={{ width: '90px', margin: '0 5px 10px 0' }}
                        value={material.heigth}
                        name="heigth"
                        onChange={onChange}
                        placeholder="Alto"
                        allowClear={true}
                    />
                    </Tooltip>
                    <Tooltip placement="top" title={"Milimetros"}>
                    <Input
                        style={{ width: '90px', margin: '0 5px 10px 0' }}
                        value={area}
                        name="area"
                        placeholder="Area"
                    />
                    </Tooltip>
                    <Input
                        style={{ width: '150px', margin: '0 5px 10px 0' }}
                        value={material.price}
                        name="price"
                        onChange={onChange}
                        placeholder="Precio"
                        allowClear={true}
                    />
                    <Input
                        style={{ width: '90px', margin: '0 5px 10px 0' }}
                        placeholder="Cant."
                        value={material.quantity}
                        name="quantity"
                        onChange={onChange}
                        allowClear={true}
                    />
                    <Input
                        style={{ width: '150px', margin: '0 5px 10px 0' }}
                        placeholder="Valor de venta"
                        value={material.saleValue}
                        name="saleValue"
                        onChange={onChange}
                        allowClear={true}
                    />
                    <Button type="primary" shape="circle" icon={<PlusOutlined />} onClick={onClick} />
                </ Form>
                <Table
                    columns={columns(onDelete)}
                    dataSource={list}
                    showHeader={false}
                    scroll={{
                        y: 120
                    }}
                    size='small'
                    pagination={false}
                />

            </div>
        </>
    )
}
export default MaterialsForm;