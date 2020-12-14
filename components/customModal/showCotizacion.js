import { Modal, Table, Image, Button } from 'antd';
import { columnsCotizacion } from './columns'
import { useState, useEffect } from 'react';
import data from '../../data/data.json'

const formatter = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
})

const ShowCotizacion = ({ index, visible, onOk, onCancel }) => {
    //-------------------------llamada a BD
    let cotizacion = {
        No: "",
        Fecha: "",
        cliente: {
            name: "",
            id: "",
            address: "",
            phoneNumb: "",
            email: ""
        },
        productos: [],
        observacion: "",
        total: 0
    }
    if (index !== "") {
        cotizacion = data.cotizaciones.find(c => c.No == index)
        cotizacion = {
            ...cotizacion, productos: cotizacion.productos = cotizacion.productos.map(p =>
                p = { ...p, total: p.precio * p.cantidad, key: p.ref }
            )
        }
    }


    //--------------------------------------

    return (
        <>
            <Modal
                title={"Cotizacion No. " + index}
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
                    <div className='space'></div>
                    <div className='dateSC'>
                        <div className="LittleTitleLine">
                            <p>Fecha de emisión</p>
                        </div>
                        <p>{cotizacion.Fecha}</p>
                    </div>
                </div>
                <div className="LittleTitleLine">
                    <p>Productos</p>
                </div>
                <Table
                    dataSource={cotizacion.productos}
                    columns={columnsCotizacion}
                    size={"small"}
                    scroll={{
                        y: 100
                    }}
                    pagination={false}
                />
                <div className='botSC'>
                    <div className="observacionSC">
                        <div className="LittleTitleLine">
                            <p>Observaciones</p>
                        </div>
                        <p>{cotizacion.observacion}</p>
                    </div>
                    <div>
                        <div className="totalSC">
                            <div className="LittleTitleLine">
                                <p>Total</p>
                            </div>
                            <p>{formatter.format(cotizacion.total)}</p>
                        </div>
                        <div className="clienteSC">
                            <div className="LittleTitleLine">
                                <p>Cliente</p>
                            </div>
                            <p>Nombre: {'    ', cotizacion.cliente.name}</p>
                            <p>Cedula/NIT:{' ', cotizacion.cliente.id}</p>
                            <p>Dirección:{'  ', cotizacion.cliente.address}</p>
                            <p>Telefono:{'   ', cotizacion.cliente.phoneNumb}</p>
                            <p>Email:{'      ', cotizacion.cliente.email}</p>
                        </div>
                    </div>
                </div>

            </Modal>
        </>
    )
}

export default ShowCotizacion;