import React, { createContext, useState, useEffect } from 'react'
import db from '../../data/data.json'
import {notificacion} from './../Notificacion';

//Crea el context
export const ClienteContext = createContext();

const ClienteProvider = (props) => 
{

     const[clientes, guardarCliente] = useState([]);
     const [busqueda, buscarCliente] = useState('');    
     const [consultar, guardarConsulta] = useState(false);
     const[seleccion, seleccionarCliente] = useState('');
     const[clienteseleccionado, hayseleccion] = useState(false);
     
     const agregarCliente = cliente => {
          const resultado = db.clientes
         
          for (let i = 0; i < resultado.length; i++) {
               if (cliente.id === resultado[i].id) {
                    notificacion('error','El cliente ya se encuentra registrado')
                    return;               
               }
          }
          resultado.unshift(cliente);
     }
     const eliminarCliente = e => {
          const resultado = db.clientes
          if(e !== ''){
                         
               for (let i = 0; i < resultado.length; i++) {
                    if (e === resultado[i].id) {
                         console.log('Eliminado', resultado[i])
                         resultado.splice(i,1)                                          
                    }
               }
               guardarCliente(resultado.filter(cliente => cliente.id !== e))

          }
     }

     const editarCliente = datos =>{
          const resultado = db.clientes
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
          seleccionarCliente('')
     }

     useEffect(() => {

          const obtenerCliente =  () =>{

               const resultado = db.clientes
               const data = [];

               //Si se hizo una busqueda retorna solo el resultado en la lista
              if(consultar){                   
                   
                    for (let i = 0; i < resultado.length; i++) {
                         if (busqueda === resultado[i].id) {             
                              data.push(resultado[i])
                              guardarCliente(data)
                         }
                    }

               }else{   
                    guardarCliente(resultado)
               }                                                             
         }
     
          obtenerCliente();

     },[consultar,seleccion]) 
   
     return(
          <ClienteContext.Provider
               value={{
                    clientes,
                    consultar,
                    buscarCliente,
                    guardarConsulta,
                    agregarCliente,
                    eliminarCliente,
                    seleccionarCliente,
                    seleccion,
                    clienteseleccionado, 
                    hayseleccion,
                    editarCliente
               }}
          >
               {props.children}
          </ClienteContext.Provider>

     )

}

export default ClienteProvider;


