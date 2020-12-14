//import styles from '../../styles/cotizacion.css';
import { Table,Tooltip } from 'antd';
const formatter = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
})

const NumOrdenServ = ({ productos, numero }) => {


    const list = productos.map(p => ({...p, total: p.precio * p.cantidad, key: p.ref }))
    
    const columns =  [
        {
            title: 'Referencia',
            dataIndex: 'ref',
            width: 105,
        },
        {
            title: 'Descripción',
            dataIndex: 'name',
        },
        {
            title: 'Precio Unitario',
            dataIndex: 'precio',
            width: 155,
            render: (text, record, index) => (formatter.format(text)),
        },
        {
            title: 'Cantidad',
            dataIndex: 'cantidad',
            width: 90
        },
        {
            title: 'Valor de venta',
            dataIndex: 'total',
            width: 130,
            render: (text, record, index) => (formatter.format(text)),
        },  
    ];

    return (
        <>
            <div className="informationPanel">
                <h2> Cuenta de cobro No. {numero}</h2>
                <div >
                    <div className="titleLine">
                        <p>Por concepto de</p>
                    </div>
                    <Table
                        columns={columns}
                        dataSource={list}
                        scroll={
                            {
                                y: 120 //No modifca el scroll en este caso en css cuentaCobro lo hace
                            }
                        }
                        size='small'
                        pagination={false}
                    />
                </div>

            </div>

        </>

    )
}

export default NumOrdenServ;