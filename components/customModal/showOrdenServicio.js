import { Modal, Table, Image, Button } from 'antd';
import { columnsMat, columnsOG, columnsRT } from './columns'
import data from '../../data/data.json';

const formatter = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
})

const ShowCotizacion = ({ index, visible, onOk, onCancel }) => {
    //-------------------------llamada a BD
    let ordenDeServicio = {
        No: "",
        fechaFinal: "",
        cotizacionNum: "",
        observacion: "",
        total: 0,
        cliente: {
            name: "",
            id: "",
            address: "",
            phoneNumb: "",
            email: ""
        },
        materiales: [],
        otrosGastos: [],
        Responsables: []
    }
    if (index !== "") {
        ordenDeServicio = data.ordenServicio.find(c => c.No == index)
    }
  

    return (
        <>
            <Modal
                title={"Orden de servicio No. " + index}
                centered
                visible={visible}
                onCancel={onCancel}
                width={700}
                footer={
                    [<Button key="1" type="primary" onClick={onOk}>Volver</Button>]
                }
            >
                <div className='topSC'>
                    <div>
                        <Image preview={false} width={100} src="/images/LogoBlue.png" />
                    </div>
                    <div className='dateSC'>
                        <div className="LittleTitleLine">
                            <p>Cotización No.</p>
                        </div>
                        <p>{ordenDeServicio.cotizacionNum}</p>
                    </div>
                    <div className='space'></div>
                    <div className='dateSC'>
                        <div className="LittleTitleLine">
                            <p>Fecha de entrega</p>
                        </div>
                        <p>{ordenDeServicio.fechaFinal}</p>
                    </div>
                </div>
                <div className="LittleTitleLine">
                    <p>Materiales</p>
                </div>
                <Table
                    dataSource={ordenDeServicio.materiales}
                    columns={columnsMat}
                    size={"small"}
                    scroll={{
                        y: 100
                    }}
                    pagination={false}
                />
                <div className="midSC">
                    <div className="otrosGastos">
                        <div>
                            <div className="LittleTitleLine">
                                <p>Otros Gastos</p>
                            </div>
                            <Table
                                dataSource={ordenDeServicio.otrosGastos}
                                columns={columnsOG}
                                size={"small"}
                                scroll={{
                                    y: 100
                                }}
                                pagination={false}
                            />
                        </div>
                    </div>
                    <div>
                        <div className="LittleTitleLine">
                            <p>Responsables del trabajo</p>
                        </div>
                        <Table
                            dataSource={ordenDeServicio.responsables}
                            columns={columnsRT}
                            size={"small"}
                            scroll={{
                                y: 100
                            }}
                            pagination={false}
                        />
                    </div>
                </div>
                <div className='botSC'>
                    <div className="observacionSC">
                        <div className="LittleTitleLine">
                            <p>Observaciones</p>
                        </div>
                        <p>{ordenDeServicio.observaciones}</p>
                    </div>
                    <div>
                        <div className="totalSC">
                            <div className="LittleTitleLine">
                                <p>Total</p>
                            </div>
                            <p>{formatter.format(ordenDeServicio.total)}</p>
                        </div>
                        <div className="clienteSC">
                            <div className="LittleTitleLine">
                                <p>Cliente</p>
                            </div>
                            <p>-{ordenDeServicio.cliente.name}</p>
                            <p>-{ordenDeServicio.cliente.id}</p>
                            <p>-{ordenDeServicio.cliente.address}</p>
                            <p>-{ordenDeServicio.cliente.phoneNumb}</p>
                            <p>-{ordenDeServicio.cliente.email}</p>
                        </div>
                    </div>
                </div>

            </Modal>
        </>
    )
}

export default ShowCotizacion;