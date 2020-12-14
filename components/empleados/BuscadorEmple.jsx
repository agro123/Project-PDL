import React,{ useContext, useState } from 'react';
import { Input,Table,Button} from 'antd';
import {SearchOutlined } from '@ant-design/icons'
import {EmpleadoContext} from './EmpleadoContext'
import {comprobarLetras} from './../Notificacion';

const Formulario = () => {
    const {guardarConsulta, buscarEmpleado} = useContext(EmpleadoContext);

    const obtenerEmpleado = e => {
        if(e.target.value !== ''){
          comprobarLetras(e.target.value)        
          buscarEmpleado(e.target.value)
        }
        guardarConsulta(false);

    }

    const onSubmit = e => {
        e.preventDefault();
        guardarConsulta(true);      
    }

    return (
            <div>            
                        <p>Buscar empleado por cédula</p>                  
                    <form >
                        <Input 
                            refs='s'
                            placeholder='Escribe su cédula'
                            style={{ width: '200px'}}
                            name='cedula'
                            //value={busqueda}
                            onChange={obtenerEmpleado}                          
                        />  
                        <Button                            
                            type = "primary"                         
                            icon = {<SearchOutlined />}
                            onClick={onSubmit} />
                </form>
            </div>
    );
};

export default Formulario;