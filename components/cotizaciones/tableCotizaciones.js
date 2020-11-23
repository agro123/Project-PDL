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

                prod: [],
                
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

          MyButton = React.forwardRef(({ onClick, href }, ref) => {
            return (
              <a href={href} onClick={onClick} ref={ref}>
                Click Me
              </a>
            )
          })


//-------------------------- Cargar Datos Del Archivo JSON -------------

//                          cargar datos generales
        lista = (cotizaciones) => {
            
            Cotiz.cotizaciones.map(cotiza => {
                
                cotizaciones.push(
                    {
                        key: cotiza.No,
                        nombre: cotiza.cliente.name,
                        id: cotiza.No,
                        cedula: cotiza.cliente.cedula,
                        telefono: cotiza.cliente.phoneNumb,
                        email: cotiza.cliente.email,
                        fecha: cotiza.Fecha,
                        observaciones: cotiza.observacion,
                        total: cotiza.total,
                        boton1: <Button type='primary' shape='round' onClick= {() => this.showModal(cotiza.No - 1)                           
                        }> Ver </Button>,
                        boton2:     <Link href='/Cotizaciones/cotizacionEditar' >
                                        <Button type='default' shape='round' danger>
                                            <a>Editar</a>
                                        </Button>
                                    </Link> 
                    }
                )
            })
        }

//                                cargar los productos
        listaProductos= (producto) => {

            Cotiz.cotizaciones.map(cotiza => 
                {
                    cotiza.productos.map(pro => {

                        producto.push(
                            {
                                key: pro.ref,
                                referencia: pro.ref,
                                name: pro.name,
                                alto: pro.alto,
                                ancho: pro.ancho,
                                cantidad: pro.cacantidad,
                                precio: pro.precio,
                                area: pro.area
                            }
                        )
                    })
                }
            )
        }
        
                    
        //-------------------------------------------------------------

    render() {
        
        //          Llenar los arreglos de datos
        this.lista(this.state.cotizaciones);
        this.listaProductos(this.state.prod);
        console.log(this.state.prod[0].ref)

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
                
                <p> Numero de cotización: {this.state.cotizaciones[this.state.indice].id} <br /> 
                    Fecha: {this.state.cotizaciones[this.state.indice].fecha} </p> 
                <h3> Señor(a/es): {this.state.cotizaciones[this.state.indice].nombre}, identificado con el Numero
                de cédula:  
                {this.state.cotizaciones[this.state.indice].cedula}
                </h3>
                <br />
                <h3>A su solicitud se cotizó lo siguiente: </h3>
                <h3> {this.state.prod[0].cantidad} {this.state.prod[0].name} {this.state.prod[0].ref} 
                de {this.state.prod[0].alto}mm de alto 
                por {this.state.prod[0].ancho}mm de ancho, 
                con un valor por metro cuadrado de ${this.state.prod[0].precio} para un total 
                de: ${this.state.prod[0].area/1000/1000 * this.state.prod[0].precio}</h3>
               
                <br />
                <h3> El total de su cotización es: ${this.state.cotizaciones[this.state.indice].total} de pesos(COP)
                </h3>
                <br />
                <h3> Nota: {this.state.cotizaciones[this.state.indice].observaciones}</h3>
                
               
            </Modal>
            </div>
           
        );
    }

}

export default listTable;
