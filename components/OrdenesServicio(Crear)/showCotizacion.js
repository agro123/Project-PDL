import { Modal, Table, Image } from 'antd';
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
        cotizacion = {...cotizacion, productos: cotizacion.productos = cotizacion.productos.map(p =>
            p = { ...p, total: p.precio * p.cantidad }
        )}
    }


    //--------------------------------------

    const columns = [
        {
            title: 'Producto',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Área',
            dataIndex: 'area',
            key: 'area',
        },
        {
            title: 'Precio',
            dataIndex: 'precio',
            key: 'precio',
            render: (text, record, index) => (formatter.format(text)),
        },
        {
            title: 'Cantidad',
            dataIndex: 'cantidad',
            key: 'cantidad',
        },
        {
            title: 'Total',
            dataIndex: 'total',
            key: 'total',
            render: (text, record, index) => (formatter.format(text)),
        },
    ];
    return (
        <>
            <Modal
                title={"Cotizacion No. " + index}
                centered
                visible={visible}
                onOk={onOk}
                onCancel={onCancel}
                width={700}
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
                    columns={columns}
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
                            <p>-{cotizacion.cliente.name}</p>
                            <p>-{cotizacion.cliente.id}</p>
                            <p>-{cotizacion.cliente.address}</p>
                            <p>-{cotizacion.cliente.phoneNumb}</p>
                            <p>-{cotizacion.cliente.email}</p>
                        </div>
                    </div>
                </div>

            </Modal>
        </>
    )
}

export default ShowCotizacion;