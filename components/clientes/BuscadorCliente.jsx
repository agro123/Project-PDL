import React,{ useContext, useState } from 'react';
import { Input,Table,Button} from 'antd';
import {SearchOutlined } from '@ant-design/icons'
import {ClienteContext} from './ClienteContext'
import {comprobarLetras} from './../Notificacion';

const Formulario = () => {
    const {guardarConsulta, buscarCliente} = useContext(ClienteContext);

    const obtenerCliente = e => {
        if(e.target.value !== ''){ 
            comprobarLetras(e.target.value)       
            buscarCliente(e.target.value)
        }
        guardarConsulta(false);

    }

    const onSubmit = e => {
        e.preventDefault();
        guardarConsulta(true);      
    }

    return (
            <div>            
                        <p>Buscar cliente por cédula</p>                  
                    <form >
                        <Input 
                            refs='s'
                            placeholder='Escribe su cédula'
                            style={{ width: '200px'}}
                            onChange={obtenerCliente}                          
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