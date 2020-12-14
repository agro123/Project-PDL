import React from 'react'
import styles from '../../styles/Home.module.css'
import BuscadorEmple from '../../components/empleados/BuscadorEmple'
import EmpleadoProvider from '../../components/empleados/EmpleadoContext'
import FormEmpleado from '../../components/empleados/FormEmpleado'

function Empleado() {
     return (
          <EmpleadoProvider>
               <div className="displayHead">
                    <h1 className={styles.title}>
                         Empleado
                    </h1>                 
               </div>
               <div className="pequeno_cont titleMargin"> 
                    <BuscadorEmple />
               </div>
               <div className="container"> 
                    <div className="clientes titleMargin">    
                         <FormEmpleado />                   
                    </div>              
               </div>
   </EmpleadoProvider>
          
     )
}

export default Empleado