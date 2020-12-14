import { Alert, Button, Table, Modal } from 'antd';
import OS from '../../data/data.json'
import dateFilter from './filters/dateFilter'
import React, { Component, useState } from 'react'
import Link from 'next/link'
import ShowOrdenServicio from '../customModal/showOrdenServicio'


const listTable = () => {

    const columns = [
        {
            title: 'No.',
            dataIndex: 'id',
            width: 40
        }, {
            title: 'Cliente',
            dataIndex: 'name',
            width: 150
        },
        {
            title: 'Fecha de entrega',
            dataIndex: 'date',
            ...dateFilter('date'),
            width: 100

        },
        {
            title: 'Valor',
            dataIndex: 'value',
            width: 80
        },
        {
            title: '',
            dataIndex: 'boton1',
            key: 'Button1',
            width: 40,
            /*render:  () => (<Button type='primary' shape='round' onClick= {() => showModal(record)                           
            }> Ver </Button>)*/
        },
        {
            title: '',
            dataIndex: 'boton2',
            key: 'Button2',
            width: 40,
            /*render:  (record) => (<Button type='primary' shape='round' 
            onClick= {() => alert('Y aqui se va a editar :3 jeje')} danger> Editar </Button>)*/

        }
    ];


    const [ordenes, setOrdenes] = useState([]);

    const formatter = new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0
    })

    const [visible, setVisible] = useState(false);

    const [indice, setIndice] = useState("");




    // ESTO MUESTRA EL MODAL
    const showModal = (id) => {
        setVisible(true),
            setIndice(id)
    };

    const handleOk = e => {
        console.log(e)
        setVisible(false)
    };

    const handleCancel = e => {
        console.log(e)
        setVisible(false)

    };


    const showEditar = (e) => {

        OS.indice = e;
    }




    const lista = (ordenes) => {

        OS.ordenServicio.map(os => {

            ordenes.push(
                {
                    key: os.No,
                    name: os.cliente.name,
                    id: os.No,
                    date: os.fechaFinal,
                    value: formatter.format(os.total),
                    boton1: <Button type='primary' shape='round' onClick={() => showModal(os.No)
                    }> Ver </Button>,
                    boton2: <Link href={{ pathname: '/ordenS/ordenServicioEditar' }} >
                        <Button type='default' shape='round' onClick={() => showEditar(os.No)} danger>
                            <a>Editar</a>
                        </Button>
                    </Link>
                }
            )
        })
    }






    lista(ordenes)

    return (

        <div>
            <div>
                <Table columns={columns}
                    dataSource={ordenes}
                    showHeader={true}

                    scroll={{
                        y: 400
                    }}
                    size="large"
                    pagination={true}
                />
            </div>

            <div>
                <ShowOrdenServicio index={indice} visible={visible} onOk={handleOk} onCancel={handleCancel} />
            </div>

        </div>

    );
}


export default listTable;
