import { Alert, Button, Table, Modal } from 'antd';
import Cotiz from '../../data/data.json';
import React, {Component} from 'react';
import customFilter from './filters/customFilter';
import Link from 'next/link';


class listTable extends Component {
    constructor()
    {
        super()
        this.state = {
            columns: 
                [
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
                        dataIndex: 'boton1',
                        key: 'Button1',
                        width: 40,
                        
                    },
                    {
                        title: '',
                        dataIndex: 'boton2',
                        key: 'Button2',
                        width: 40,
                        
                    }
                ],

                cotizaciones : [],
                
                formatter : new Intl.NumberFormat('es-CO', {
                    style: 'currency',
                    currency: 'COP',
                    minimumFractionDigits: 0
                  }),
                
                  visible: false,

                  indice: 0
                }
        }

        showModal = (id) => {

            this.setState({
                visible: true,
                indice: id
              });
          };

          showEditar = (id) => {
              
            
          }
        
          handleOk = e => {
            console.log(e);
            this.setState({
              visible: false,
            });
          };
        
          handleCancel = e => {
            console.log(e);
            this.setState({
              visible: false,
            });
          };

        lista = (cotizaciones) => {
            
            Cotiz.clientes.map(cotiza => {
                
                cotizaciones.push(
                    {
                        key: cotiza.id,
                        nombre: cotiza.name,
                        id: cotiza.id,
                        cedula: cotiza.cedula,
                        telefono: cotiza.phoneNumb,
                        email: cotiza.email,
                        boton1: <Button type='primary' shape='round' onClick= {() => this.showModal(cotiza.id - 1)                           
                        }> Ver </Button>,
                        boton2:     <Link href='/Cotizaciones/cotizacionEditar'>
                                        <Button type='default' shape='round' danger>
                                            <a>Editar</a>
                                        </Button>
                                    </Link> 
                    }
                )
            })
        }

    render() {
        
        this.lista(this.state.cotizaciones);

        return (
    
            <div>
            <div>
            <Table columns={this.state.columns}
                dataSource={this.state.cotizaciones}
          
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
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
            >
                
                <p> Cotizacion No. {this.state.cotizaciones[this.state.indice].id} <br /> 
                    Email: {this.state.cotizaciones[this.state.indice].email} </p> 
                <h2> Cliente: {this.state.cotizaciones[this.state.indice].nombre} </h2>
                <br />
                <h3> Valor: {this.state.cotizaciones[this.state.indice].telefono} </h3>
                <h3> Cedula: {this.state.cotizaciones[this.state.indice].cedula} </h3>
                <br />
                <br />
                
               
            </Modal>
            </div>
           
        );
    }

}

export default listTable;
