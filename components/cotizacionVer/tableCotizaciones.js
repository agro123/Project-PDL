import { Alert, Button, Table, Modal } from 'antd';
import Cotiz from '../../data/data.json';
import CotizIndice from '../../data/indice.json';
import React, { Component, PureComponent, useState } from 'react';
import customFilter from './filters/customFilter';
import Link from 'next/link';
import CotizacionEditar from '../../pages/Cotizaciones/cotizacionEditar'
import ShowCotizacionesVer from '../customModal/showCotizacion'

const listTable = () => {

    const [columns, setColumns] = useState([
        {
            title: 'No.',
            dataIndex: 'id',
            ...customFilter('id'),
            width: 40
        }, {
            title: 'Cliente',
            dataIndex: 'nombre',
            ...customFilter('nombre'),
            width: 150
        },
        {
            title: 'C.C. o Nit',
            dataIndex: 'cedula',
            ...customFilter('cedula'),
            width: 100

        },
        {
            title: 'E-mail',
            dataIndex: 'email',
            ...customFilter('email'),
            width: 80
        },
        {
            title: '',
            key: 'Button1',
            dataIndex: 'boton1',

            width: 40,

        },
        {
            title: '',
            key: 'Button2',
            dataIndex: 'boton2',
            width: 40,

        }
    ]);

    const [cotizaciones, setCotizaciones] = useState([]);
    const [prod, setProd] = useState([]);
    const [visible, setVisible] = useState(false);
    const [indice, setIndice] = useState("");

    const formatter = new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0
    });



    const showModal = (id) => {

        setCotizaciones([])
        setProd([])
        setIndice(id)

        setVisible(true)
    };

    const showEditar = (id) => {

        CotizIndice.indice = id

    }

    const handleOk = e => {
        setProd([])
        setVisible(false)
    };

    const handleCancel = e => {
        setProd([])
        setVisible(false)
    };

    //-------------------------- Cargar Datos Del Archivo JSON -------------

    //                          cargar datos generales
    const lista = (cotizaciones) => {

        Cotiz.cotizaciones.map(cotiza => {

            cotizaciones.push(
                {
                    key: cotiza.No,
                    nombre: cotiza.cliente.name,
                    id: cotiza.No,
                    cedula: cotiza.cliente.id,
                    telefono: cotiza.cliente.phoneNumb,
                    email: cotiza.cliente.email,
                    fecha: cotiza.Fecha,
                    observaciones: cotiza.observacion,
                    total: cotiza.total,
                    boton1: <Button type='primary' shape='round'
                        onClick={() => showModal(cotiza.No)
                        }>
                        Ver
                        </Button>,
                    boton2: <Link href={{ pathname: '/Cotizaciones/cotizacionEditar' }} >
                        <Button type='default' key="1" shape='round' onClick={() => showEditar(cotiza.No)} danger>
                            <a>Editar</a>
                        </Button>
                    </Link>
                }
            )
        })
    }

    //-------------------------------------------------------------
    //          Llenar los arreglos de datos
    lista(cotizaciones);

    return (
        <div>
            <div>
                <Table
                    columns={columns}
                    dataSource={cotizaciones}
                    showHeader={true}
                    scroll={{
                        y: 500
                    }}
                    size="large"
                    pagination={true}
                />

            </div>
            <ShowCotizacionesVer key={indice} index={indice} visible={visible} onOk={handleOk} onCancel={handleCancel} />
        </div>

    );
}


export default listTable;