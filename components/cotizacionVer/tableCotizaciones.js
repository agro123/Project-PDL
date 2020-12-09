import { Alert, Button, Table, Modal } from 'antd';
import Cotiz from '../../data/data.json';
import CotizIndice from '../../data/indice.json';
import React, {Component, PureComponent, useState} from 'react';
import customFilter from './filters/customFilter';
import Link from 'next/link';
import CotizacionEditar from '../../pages/Cotizaciones/cotizacionEditar'

const listTable = () => {
    
    const [columns, setColumns] = useState ([
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
                
    const [cotizaciones, setCotizaciones] = useState ([]);
    const [prod, setProd] = useState ( []);
    const [visible, setVisible] = useState (false);
    const [indice, setIndice] = useState (0);

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
        console.log('El indice del .json es: ' +id)
    }
        
    const handleOk = e => {
        console.log(e);
        setProd([])
        setVisible(false)
    };
        
    const handleCancel = e => {
        console.log(e);
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
                                    onClick= {() => showModal(cotiza.No - 1)                           
                                    }> Ver </Button>,
                        boton2:     <Link href= {{pathname: '/Cotizaciones/cotizacionEditar'}} >
                                        <Button type='default' shape='round' onClick={() => showEditar(cotiza.No)} danger>
                                            <a>Editar</a>
                                        </Button>
                                    </Link> 
                    }
                )
            })
        }

//                                cargar los productos
    const listaProductos= (producto) => {

                    Cotiz.cotizaciones[indice].productos.map(pro => {

                        producto.push(
                            {
                                key: pro.ref,
                                referencia: pro.ref,
                                name: pro.name,
                                alto: pro.alto,
                                ancho: pro.ancho,
                                cantidad: pro.cantidad,
                                precio: pro.precio,
                                area: pro.area
                            }
                        )
                    })
                
                       
    };

    const algo= () => {

            
            return(
                prod.map(
                    (products1) =>
                    
                    <h4> {products1.cantidad}  {products1.name} {products1.referencia+ " "} 
                de {products1.alto}mm de alto 
                por {products1.ancho}mm de ancho, 
                con un valor por metro cuadrado de ${products1.precio} para un total 
                de: ${products1.area/1000000 * products1.precio}
                </h4>
            )
            )
    };


        
        //-------------------------------------------------------------
        //          Llenar los arreglos de datos
    lista(cotizaciones);
    listaProductos(prod)

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
            <Modal
                title="Cotización"
                visible={visible}
                onOk={handleOk}
                onCancel={handleCancel}
                width={700}
            >
                
                <p> Numero de cotización: {cotizaciones[indice].id} <br /> 
                    Fecha: {cotizaciones[indice].fecha} </p> 
                <h3> Señor(a/es): {cotizaciones[indice].nombre} <br/> Identificado con el Numero
                de cédula:  
                {" " + cotizaciones[indice].cedula}
                </h3>
                <br />
                <h3> A su solicitud se cotizó lo siguiente: </h3>
                

                {algo()}
               
                <br />
                <h3> El total de su cotización es: ${cotizaciones[indice].total} de pesos(COP)
                </h3>
                <br />
                <h3> Nota: {cotizaciones[indice].observaciones}</h3>
                
               
            </Modal>
            </div>
           
        );
}


export default listTable;