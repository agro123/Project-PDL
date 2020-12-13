import { useState, useEffect } from 'react';
import data from '../../data/data.json';
import styles from '../../styles/Home.module.css';
import ShowDate from '../../components/cotizacion/crear/showDate';
import NumOrdenServ from '../../components/cuenta_cobro/numOrdenSer';
import FormaPago from '../../components/cuenta_cobro/formaPago.jsx';
import Cliente from '../../components/cuenta_cobro/cliente';
import Total from '../../components/cotizacion/crear/totalDisplay';
import { Button, Tooltip, Select, notification, Modal } from 'antd';
import { PrinterOutlined,ExclamationCircleOutlined } from '@ant-design/icons';
const { Option } = Select;

const client = {
  name: "",
  id: "",
  address: "",
  phoneNumb: "",
  email: ""
}
const openNotificationWithIcon = (status, title, description) => {
  notification[status]({
    message: title,
    description:
      description,
  });
};
function CuentaCobro() {
  const [ordenServicio, setOrdenServicio] = useState({});
  const [productos, setProductos] = useState([]);
  const [total, setTotal] = useState(0);
  const [cliente, setCliente] = useState(client);
  const [pago, setPago] = useState("");
  const [numCC, setNumCC] = useState(() => data.cuentaCobro.length + 1)
  const [date, setDate] = useState(() => {
    let date = new Date()

    let day = date.getDate()
    let month = date.getMonth() + 1
    let year = date.getFullYear()
    return day + "-" + month + "-" + year
  }) //MODIFICAR ESTO
  //------------------------BD
  const cotizacionList = () =>
    data.ordenServicio.map(c => <Option key={c.No} value={c.No}>{c.No}</Option>)

  const onChange = e => {
    if (e != "") {
      const oS = data.ordenServicio.find(o => o.No == e)
      const cotizacion = data.cotizaciones.find(c => c.No == oS.cotizacionNum)
      setOrdenServicio(oS);
      setProductos(cotizacion.productos);
      setCliente(oS.cliente);
      setTotal(cotizacion.total);
    } else {
      setOrdenServicio({});
      setCliente(client);
      setTotal(0);
      setProductos([]);
    }
  }
  //------------------------------

  const handlePago = e => {
    setPago(e);
  }
  const onClick = e => {
    if (ordenServicio.No!==undefined) {
        if (pago!="") {
          confirm();
        } else {
          openNotificationWithIcon('error', 'Sin forma de pago ',
            'Por favor seleccione un metodo de pago');
        }
    } else {
      openNotificationWithIcon('error', 'Sin orden de servicio',
        'Por favor seleccione una orden de servicio');
    }
  }
  const handleOk = () => {
    data.cuentaCobro.push({
      cuentaDeCobroNum: ordenServicio.No,
      No: data.cuentaCobro.length + 1,
      Fecha: date,
      productos: [...productos],
      cliente: cliente,
      total: total,
      pago: pago,
    })
  }
  const confirm = () => {
    Modal.confirm({
      title: "¿Está seguro de realizar esta operación?",
      icon: <ExclamationCircleOutlined />,
      content:
        "Por favor verifique que todos los datos estén bien antes de hacer clic en Aceptar.",
      okText: "Aceptar",
      cancelText: "Cancelar",
      onOk() {handleOk()},
    });
  }
  //-----------------Verficar---------------------------

  //----------------------------------------------------

  return (
    <>
      <div className='top'>
        <h1 className={styles.title}>
          Cuenta de cobro
       </h1>
        <ShowDate />
      </div>
      <div className='cotizacionPanel'>
        <div className='middleCC'>

          <div>
            <div>
              <h2>Orden de servicio</h2>
            </div>
            <Tooltip placement="top" title={"Seleccionar una orden de servicio"} >
              <Select
                defaultValue=""
                style={{ width: "200px" }}
                onChange={onChange}
              >
                <Option value="">Seleccionar</Option>
                {cotizacionList()}
              </Select>
            </Tooltip>
          </div>
          <NumOrdenServ productos={productos} numero={numCC} />
        </div>
        <div className='bot'>
          <FormaPago handlePago={handlePago} />
          <Cliente cliente={cliente} />
          <Total total={total} />
          <div className='final'>
            <Tooltip placement="top" title={"Imprimir y Guardar"}>
              <Button type="primary"
                icon={<PrinterOutlined />}
                onClick={onClick}
              >
                Imprimir
          </Button>
            </Tooltip>
          </div>
        </div>
      </div>
    </>
  )
}

export default CuentaCobro;