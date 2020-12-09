import { Alert, Button, Table, Modal } from 'antd';
import OS from '../data/OS.json'
import dateFilter from './filters/dateFilter'
import React, { Component, useState } from 'react'
import Link from 'next/link'


const listTable = () => {
   
    const [columns, setColumns] = useState ([
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
                        title: 'Fecha',
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
                ]);
            

                const [ordenes, setOrdenes] = useState ( []);

            const formatter = new Intl.NumberFormat('es-CO', {
                style: 'currency',
                currency: 'COP',
                minimumFractionDigits: 0
            })

            const [visible, setVisible] = useState (false);

            const [indice, setIndice] = useState (0);
        
    

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

    const lista = (ordenes) => {

        OS.OrdenServicio.map(os => {

            ordenes.push(
                {
                    key: os.id,
                    name: os.name,
                    id: os.id,
                    date: os.date,
                    value: formatter.format(os.value),
                    boton1: <Button type='primary' shape='round' onClick={() => showModal(os.id - 1)
                    }> Ver </Button>,
                    boton2:
                       
                            <Button type='default' shape='round' danger onClick={() => alert("Aun no prro") }>

                                <a>Editar</a>

                            </Button>
                     
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
                <Modal
                    title={"Orden de servicio No.  " + ordenes[indice].id}
                    visible={visible}
                    onOk={handleOk}
                    onCancel={handleCancel}
                    width={1000}
                >

                    <p>
                    Fecha: {ordenes[indice].date} </p>
                    <h2> Cliente: {ordenes[indice].name} </h2>
                    <br />
                    <h3> Valor: {ordenes[indice].value} </h3>
                    <br />
                    <br />
                    <p> Esta es toda la informacion que tiene que salir y hago esto grande para que se agrande el Modal
                    hacia los lados a ver que tan grande puede llegar a ser y que tanta informacion le cabe porque
                    aqui se supone que van a ir todos los materiales que se van a usar en consecuencia lo que mi padre
                    llama "La lista de corte", por ello esto va a ser un modal desgraciadamente grande y esto es una
                    prueba bastante adecuada para hacerle frente a esa necesidad </p>

                </Modal>
            </div>

        );
    }


export default listTable;
