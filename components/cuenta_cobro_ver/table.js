import { Button, Table } from 'antd';
import { useState, useEffect } from 'react';
import dateFilter from '../ordenesServicio/filters/dateFilter';
import customFilter from '../cotizacionVer/filters/customFilter'
import ShowCuentaCobro from '../customModal/showCuentaCobro'
/* import ShowOrdenServicio from '../customModal/showOrdenServicio' */
import data from '../../data/data.json'
const TableCuentaCobro = () => {
    const [visible, setVisible] = useState(false);
    const [indice, setIndice] = useState("");

    const [cuentasDeCobro, setCuentasDeCobro] = useState(data.cuentaCobro.map(l => (
        {
            ...l, cliente: l.cliente.name, key: l.No, id: l.cliente.id
        }
    )));

    const columns = [
        {
            title: 'No.',
            dataIndex: 'No',
            width: 150,
            ...customFilter('No'),
        },
        {
            title: 'Cliente',
            dataIndex: 'cliente',
            ...customFilter('cliente'),
        },
        {
            title: 'Identificacion',
            dataIndex: 'id',
            ...customFilter('id'),
        },
        {
            title: 'Fecha',
            dataIndex: 'Fecha',
            width: 120,
            ...dateFilter('Fecha'),
        },
        {
            title: 'Valor',
            dataIndex: 'total',
            ...customFilter('total'),
            width: 200,
        },
        {
            title: '',
            dataIndex: 'button',
            key: 'x',
            width: 100,
            render: (text, record) => (
                <Button type='primary' shape='round'
                    onClick={() =>showModal(record.No)
                    }
                >
                    Ver
                </Button>
            )
        }
    ];
    const showModal = (id) => {
        setIndice(id)
        setVisible(true)
    };
    const handleOk = e => {
        setVisible(false)
    };

    const handleCancel = e => {
        setVisible(false)
    };
    return (
        <>
            <div className="titleLine"></div>
            <Table
                columns={columns}
                dataSource={cuentasDeCobro}
                scroll={{
                    y: 500
                }}
                size="large"
                pagination={true}
            />
            <ShowCuentaCobro key={indice} index={indice} visible={visible} onOk={handleOk} onCancel={handleCancel} />
        </>
    )

}

export default TableCuentaCobro;