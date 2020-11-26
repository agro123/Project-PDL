import { Alert, Button, Table, Modal } from 'antd';
import OS from '../data/OS.json'
import dateFilter from './filters/dateFilter'
import React, {Component} from 'react'


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
                        /*render:  () => (<Button type='primary' shape='round' onClick= {() => this.showModal(record)                           
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
                ],

                ordenes : [],
                
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

        lista = (ordenes) => {
            
            OS.OrdenServicio.map(os => {
                
                ordenes.push(
                    {
                        key: os.id,
                        name: os.name,
                        id: os.id,
                        date: os.date,
                        value: this.state.formatter.format(os.value),
                        boton1: <Button type='primary' shape='round' onClick= {() => this.showModal(os.id - 1)                           
                        }> Ver </Button>,
                        boton2: <Button shape='round' onClick= {() => alert('Aquí va la parte de editar')} 
                        danger> Editar </Button>
                    }
                )
            })
        }

        


    render() {
        
        this.lista(this.state.ordenes)

        return (
    
            <div>
            <div>
            <Table columns={this.state.columns}
                dataSource={this.state.ordenes}
                showHeader={true}
                
                scroll={{
                    y: 400
                }}
                size="large"
                pagination={true}
            />
            </div>
            <Modal
                title="Orden de servicio"
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
            >
                
                <p> Orden de servicio No. {this.state.ordenes[this.state.indice].id} <br /> 
                    Fecha: {this.state.ordenes[this.state.indice].date} </p> 
                <h2> Cliente: {this.state.ordenes[this.state.indice].name} </h2>
                <br />
                <h3> Valor: {this.state.ordenes[this.state.indice].value} </h3>
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

}

export default listTable;
