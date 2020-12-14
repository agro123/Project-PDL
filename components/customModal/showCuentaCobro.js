import { Modal, Table, Image, Button } from 'antd';
import { useState, useEffect } from 'react';
import {
    DollarCircleOutlined
  } from '@ant-design/icons';
import { columnsCuentaCobro } from './columns'
import data from '../../data/data.json';

const formatter = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
})

const ShowCuentaCobro = ({ index, visible, onOk, onCancel }) => {
    //-------------------------llamada a BD
    let cuentaCobro = {
        No: "",
        Fecha: "",
        cuentaDeCobroNum: "",
        cliente: {
            name: "",
            id: "",
            address: "",
            phoneNumb: "",
            email: ""
        },
        productos: [],
        total: 0
    }
    if (index !== "") {
        cuentaCobro = data.cuentaCobro.find(c => c.No == index)
        cuentaCobro = {
            ...cuentaCobro, productos: cuentaCobro.productos = cuentaCobro.productos.map(p =>
                p = { ...p,total: p.precio * p.cantidad, key: p.ref }
            )
        }
    }


    //--------------------------------------
    return (
        <>
            <Modal
                title={"Cuenta de cobro No. " + index}
                centered
                visible={visible}
                onCancel={onCancel}
                width={700}
                footer={
                    [<Button key="1 " type="primary" onClick={onOk}>Volver</Button>]
                }
            >
                <div className='topSC'>
                    <div>
                        <Image preview={false} width={100} src="/images/LogoBlue.png" />
                    </div>
                    <div className='dateSC'>
                        <div className="LittleTitleLine">
                            <p>Orden de servicio No.</p>
                        </div>
                        <p>{cuentaCobro.cuentaDeCobroNum}</p>
                    </div>
                    <div className='space'></div>
                    <div className='dateSC'>
                        <div className="LittleTitleLine">
                            <p>Fecha de emisión</p>
                        </div>
                        <p>{cuentaCobro.Fecha}</p>
                    </div>
                </div>

                <div className="clienteCC">
                    <div className="LittleTitleLine">
                        <p>Cliente</p>
                    </div>
                    <p>Nombre: {cuentaCobro.cliente.name}</p>
                    <p>Cedula/NIT: {cuentaCobro.cliente.id}</p>
                    <p>Dirección: {cuentaCobro.cliente.address}</p>
                    <p>Telefono: {cuentaCobro.cliente.phoneNumb}</p>
                    <p>Email: {cuentaCobro.cliente.email}</p>
                </div>
                <div className="LittleTitleLine">
                    <p>Productos</p>
                </div>
                <Table
                    dataSource={cuentaCobro.productos}
                    columns={columnsCuentaCobro}
                    size={"small"}
                    scroll={{
                        y: 100
                    }}
                    pagination={false}
                />
                <div className='botSC'>
                    <div>
                        <div className="formaDePago">
                            <div className="LittleTitleLine">
                                <p>Formato de pago</p>
                            </div>
                            <p><DollarCircleOutlined /> {cuentaCobro.pago}</p>
                        </div>
                    </div>
                    <div className='space'></div>
                    <div className="totalSC">
                        <div className="LittleTitleLine">
                            <p>Total</p>
                        </div>
                        <p>{formatter.format(cuentaCobro.total)}</p>
                    </div>
                </div>

            </Modal>
        </>
    )
}

export default ShowCuentaCobro;