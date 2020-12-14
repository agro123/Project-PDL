import React, { createContext, useState, useEffect} from 'react'
import db from '../../data/data.json'
import {notificacion} from './../Notificacion';

//Crea el context
export const EmpleadoContext = createContext();

const EmpleadoProvider = (props) => 
{

     const[empleados, guardarEmpleado] = useState([]);
     const [busqueda, buscarEmpleado] = useState('');    
     const [consultar, guardarConsulta] = useState(false);
     const[seleccion, seleccionarEmpleado] = useState('');
     const[empleadoseleccionado, hayseleccion] = useState(false);
     
     const agregarEmpleado = empleado => {
          const resultado = db.empleados

          for (let i = 0; i < resultado.length; i++) {
               if (empleado.id === resultado[i].id) {
                    notificacion('error','El empleado ya se encuentra registrado')
                    return;               
               }
          }
          resultado.unshift(empleado);
     }

     const eliminarEmpleado = e => {
          const resultado = db.empleados
          if(e !== ''){
                         
               for (let i = 0; i < resultado.length; i++) {
                    if (e === resultado[i].id) {
                         console.log('Eliminado', resultado[i])
                         resultado.splice(i,1)                                          
                    }
               }
               guardarEmpleado(resultado.filter(empleado => empleado.cedula !== e))

          }
     }

     const editarEmpleado = datos =>{
          const resultado = db.empleados

          if(datos !== ''){                        
               if(seleccion.key === datos.key){

                     for (let i = 0; i < resultado.length; i++) {
                          if (seleccion.id === resultado[i].id) {
                              resultado[i].id = datos.id
                              resultado[i].name = datos.name
                              resultado[i].email = datos.email
                              resultado[i].address = datos.address
                              resultado[i].phoneNumb = datos.phoneNumb
                         }
                    }                     
               }               
          }
          seleccionarEmpleado('')
     }

     useEffect(() => {

          const obtenerEmpleado =  () =>{

               const resultado = db.empleados
               const data = [];

               //Si se hizo una busqueda retorna solo el resultado en la lista
              if(consultar){                                  
                    for (let i = 0; i < resultado.length; i++) {
                         if (busqueda === resultado[i].id) {             
                              data.push(resultado[i])
                              guardarEmpleado(data)
                         }
                    }

               }else{                    
                    guardarEmpleado(resultado)
               }                                                             
         }
     
          obtenerEmpleado();

     },[consultar,seleccion]) 
   
     return(
          <EmpleadoContext.Provider
               value={{
                    empleados,
                    consultar,
                    buscarEmpleado,
                    guardarConsulta,
                    agregarEmpleado,
                    eliminarEmpleado,
                    seleccionarEmpleado,
                    seleccion,
                    empleadoseleccionado, 
                    hayseleccion,
                    editarEmpleado
               }}
          >
               {props.children}
          </EmpleadoContext.Provider>

     )

}

export default EmpleadoProvider;


