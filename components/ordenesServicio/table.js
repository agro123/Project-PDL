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
                        
                    },
                    {
                        title: '',
                        dataIndex: 'boton2',
                        key: 'Button2',
                        width: 40,
                       
                    }
                ],

                ordenes : [],
                
                formatter : new Intl.NumberFormat('es-CO', {
                    style: 'currency',
                    currency: 'COP',
                    minimumFractionDigits: 0
                  }),
                
                  visible: false
                }
        }

        showModal = (key) => {
            
            

            this.setState({
                visible: true,
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
                        boton1: <Button type='primary' shape='round' onClick= { 
                            () => this.showModal()                           
                        }>Ver</Button>,
                        boton2: <Button shape='round' onClick= {() => this.showModal(os.id)} danger>Editar</Button>
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
                title="Te amo mi amor"
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
            >
                
                <p> {this.state.ordenes.find(index= key)} </p>
               
            </Modal>
            </div>
           
        );
    }

}

export default listTable;
