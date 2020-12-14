import React,{ useContext, useState, useEffect } from 'react';
import {ClienteContext} from './ClienteContext'
import { Input, AutoComplete,Button } from 'antd';
import ListaClientes from './ListaClientes'; 
import {PlusOutlined} from '@ant-design/icons';
import {
     notificacion, 
     camposVacios, 
     comprobarNumeros, 
     comprobarLetras,
     comprobarEmail

} from './../Notificacion';

const FormCliente = () => {

     const{seleccion, 
          clienteseleccionado,
          agregarCliente, 
          hayseleccion, 
          editarCliente} = useContext(ClienteContext);


     const [datoscliente, guardarCliente] = useState({
          name: '',
          id: '',                
          address: '',
          phoneNumb: '',
          email: ''
     })

     const{name, id, email} = datoscliente;

     //Guarda la seleccion
     
     useEffect(() => {
          if(seleccion !== null){
               guardarCliente(seleccion);
               hayseleccion(false)
          }
          
     },[clienteseleccionado])
     

     const onName = valor => {  
          comprobarNumeros(valor);              
          guardarCliente({
               ...datoscliente,
               name: valor
          })
     }

     const onCedula = e =>  {     
          comprobarLetras(e)
          guardarCliente({
               ...datoscliente,
               id: e
          })          
     }

     const onTelefono  = e  =>{
          comprobarLetras(e.target.value)
          guardarCliente({
               ...datoscliente,
               [e.target.name] : e.target.value
          }) 
     }

     const onChange = e  =>{
          guardarCliente({
               ...datoscliente,
               [e.target.name] : e.target.value
          })          
     }

     const resetearForm = () => {
          guardarCliente({
               name: '',
               id: '',                
               address: '',
               phoneNumb: '',
               email: ''
          })
     }
     const onClick = e => {
          e.preventDefault();

          if(id === undefined || name === undefined 
          || id === '' || name === ''){         
               camposVacios()
               return;
          
          }else{

               if(email !== undefined && email !== ''){
                    if(comprobarEmail(email) === false){
                         return;
                    }
               }
          }
      
          if(seleccion === ''){
               agregarCliente(datoscliente)
               resetearForm()
          }else{

               editarCliente(datoscliente);
               resetearForm()
          }
 
          
     }
     return (
          <div>
               <div className="titleLine">
                    <p>Datos cliente</p>
                </div>
               <div className="table">
                    <form>        
                         <Input.Group 
                              style={{display: 'flex'}}>                                  
                              <AutoComplete                           
                                   style={{ width: '25%', margin: '0 2% 2% 0' }}
                                   placeholder="Cedula"
                                   value={datoscliente && datoscliente.id}
                                   allowClear={true}
                                   onChange={onCedula}
                              />

                              <AutoComplete
                                   style={{ width: '25%', margin: '0 2% 2% 0' }}
                                   placeholder="Nombre"
                                   value={datoscliente && datoscliente.name}
                                   onChange={onName} 
                                   allowClear={true}                         
                              />
                              
                              <Input
                                   style={{ width: '25%', margin: '0 2% 2% 0' }}
                                   placeholder="Email"
                                   type="email"
                                   name="email"
                                   value={datoscliente && datoscliente.email}
                                   onChange={onChange}
                                   allowClear={true} 
                              />

                              <Input
                                   style={{ width: '25%', margin: '0 2% 2% 0' }}
                                   placeholder="Direccion"
                                   name="address"
                                   value={datoscliente && datoscliente.address}
                                   onChange={onChange}
                                   allowClear={true} 
                                   />

                              <Input
                                   style={{ width: '25%', margin: '0 5% 2% 0' }}
                                   placeholder="Telefono"
                                   name="phoneNumb"
                                   value={datoscliente && datoscliente.phoneNumb}
                                   onChange={onTelefono}
                                   allowClear={true} 
                              />
                                   
                                   <Button type="primary" shape="circle" icon={<PlusOutlined />}onClick={onClick}/>
                                   
                         </Input.Group>
                    </form>
               </div>
               <ListaClientes />
          </div>
     );
};

export default FormCliente;