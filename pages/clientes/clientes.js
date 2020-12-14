import React from 'react'
import styles from '../../styles/Home.module.css'
import BuscadorCliente from '../../components/clientes/BuscadorCliente'
import ClienteProvider from '../../components/clientes/ClienteContext'
import FormCliente from '../../components/clientes/FormCliente'

function Clientes() {
     return (
          <ClienteProvider>
               <div className="displayHead">
                    <h1 className={styles.title}>
                         Cliente
                    </h1>                 
               </div>
               <div className="pequeno_cont titleMargin"> 
                    <BuscadorCliente />
               </div>
               <div className="container"> 
                    <div className="clientes titleMargin">    
                         <FormCliente />                   
                    </div>              
               </div>
   </ClienteProvider>
          
     )
}

export default Clientes
