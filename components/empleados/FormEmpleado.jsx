import React,{ useContext, useState, useEffect } from 'react';
import {EmpleadoContext} from './EmpleadoContext'
import { Input, AutoComplete,Button } from 'antd';
import ListaEmpleados from './ListaEmpleados'; 
import {PlusOutlined} from '@ant-design/icons';
import {
     notificacion, 
     camposVacios, 
     comprobarNumeros, 
     comprobarLetras,
     comprobarEmail
} from './../Notificacion';

const FormEmpleado = () => {

     const{seleccion, 
          empleadoseleccionado, 
          agregarEmpleado, 
          hayseleccion, 
          editarEmpleado} = useContext(EmpleadoContext);

     const [datosempleado, guardarEmpleado] = useState({
          name: '',
          id: '',                
          address: '',
          phoneNumb: '',
          email: ''
     })

     const{id, name, email} = datosempleado;

     //Guarda la seleccion
     
     useEffect(() => {
          if(seleccion !== null){
               guardarEmpleado(seleccion);
               hayseleccion(false)
          }
          
     },[empleadoseleccionado])
     

     const onName = value => {
          comprobarNumeros(value);                    
          guardarEmpleado({
               ...datosempleado,
               name: value
          })
         
          
     }

     const onCedula = e =>  {     
          comprobarLetras(e)
          guardarEmpleado({
               ...datosempleado,
               id: e
          })          
     }

     const onTelefono  = e  =>{
          comprobarLetras(e.target.value)
          guardarEmpleado({
               ...datosempleado,
               [e.target.name] : e.target.value
          }) 
     }

     const onChange = e  =>{
          guardarEmpleado({
               ...datosempleado,
               [e.target.name] : e.target.value
          }) 
          
     }

     const resetearForm = () => {
          guardarEmpleado({
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
               agregarEmpleado(datosempleado)
               resetearForm()
          }else{
               editarEmpleado(datosempleado);
               resetearForm()
          }

     }
     return (
          <div>
               <div className="titleLine">
                    <p>Datos Empleado</p>
                </div>
               <div className="table">
                    <form>
                         <Input.Group 
                              style={{display: 'flex'}}>
                              <AutoComplete                  
                                   style={{ width: '25%', margin: '0 2% 2% 0' }}
                                   placeholder="Cedula"
                                   value={datosempleado && datosempleado.id}
                                   allowClear={true}
                                   onChange={onCedula}
                              />

                              <AutoComplete
                                   style={{ width: '25%', margin: '0 2% 2% 0' }}
                                   placeholder="Nombre"
                                   value={datosempleado && datosempleado.name}
                                   onChange={onName} 
                                   allowClear={true}                         
                              />

                              <Input
                                   style={{ width: '25%', margin: '0 2% 2% 0' }}
                                   placeholder="Email"
                                   name="email"
                                   value={datosempleado && datosempleado.email}
                                   onChange={onChange}
                                   allowClear={true} 
                              />
                              <Input
                                   style={{ width: '25%', margin: '0 2% 2% 0' }}
                                   placeholder="Direccion"
                                   name="address"
                                   value={datosempleado && datosempleado.address}
                                   onChange={onChange}
                                   allowClear={true} 
                              />

                              <Input
                                   style={{ width: '25%', margin: '0 5% 2% 0' }}
                                   placeholder="telefono"
                                   name="phoneNumb"
                                   value={datosempleado && datosempleado.phoneNumb}
                                   onChange={onTelefono}
                                   allowClear={true} 
                              />
                                   
                              <Button type="primary" shape="circle" icon={<PlusOutlined />}onClick={onClick}/>
                              
                         </Input.Group>
                    </form>
               </div>
               <ListaEmpleados />
          </div>
     );
};

export default FormEmpleado;