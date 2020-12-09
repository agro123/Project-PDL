import { useState } from 'react';
import data from '../../data/data.json';
import styles from '../../styles/Home.module.css';
import ClientForm from '../../components/cotizacion/crear/clientForm';
import ShowDate from '../../components/cotizacion/crear/showDate';
import MaterialsForm from '../../components/cotizacion/crear/materialsForm';
import ObservationForm from '../../components/cotizacion/crear/observacionForm';
import TotalDisplay from '../../components/cotizacion/crear/totalDisplay';
import { Button, Tooltip, notification, Modal } from 'antd';
import { PrinterOutlined, ExclamationCircleOutlined } from '@ant-design/icons';

function Cotizacion() {

  const [total, setTotal] = useState(0);
  const [client, setClient] = useState({});
  const [materials, setMaterials] = useState([]);
  const [observation, setObservation] = useState('');
  const [allOk, setAllOk] = useState('');
  const [date, setDate] = useState(() => {
    let date = new Date()

    let day = date.getDate()
    let month = date.getMonth() + 1
    let year = date.getFullYear()
    return day + "-" + month + "-" + year
  } //MODIFICAR ESTO

  )

  //------------------------Data confirmation---------------------------------------
  const correctClient = () => {
    if (client.name == '' || client.name === undefined || client.id == '' || client.id === undefined) {
      return false;
    }
    else { return true }
  }
  const openNotificationWithIcon = (status, title, description) => {
    notification[status]({
      message: title,
      description:
        description,
    });
  };

  //--------------------------------------------------------------------------------
  const handleClientForm = e => {
    setClient(e);
  }

  const handleMaterialForm = e => {
    setMaterials(e);
  }

  const handleObservationForm = e => {
    setObservation(e);
  }
  const handleTotal = e => {
    setTotal(e);
  }
  const clientFields = e => {
    setAllOk('');
  }
  const onClick = e => {
    if (correctClient() || total != 0) {
      if (correctClient()) {
        if (total != 0) {
          confirm();
        } else {
          openNotificationWithIcon('error', 'Lista de productos vacía',
            'Por favor agregue un producto a cotizar para que sea posible imprimir la cotización.');
        }

      } else {
        openNotificationWithIcon('error', 'Campos vacios en cliente',
          'Los campos Nombre e Identificación son obligatorios. Por favor verifique que estén completos.');
        setAllOk('error');

      }
    } else {
      console.log("total es", total, "Correct client es", correctClient())
      openNotificationWithIcon('error', 'Campos vacios',
        'Complete los campos para poder agregar una cotización');
    }
  }
  const handleOk = e => {
    data.cotizaciones.push({
      No: data.cotizaciones.length + 1,
      Fecha: date,
      productos: [...materials],
      cliente: client,
      total: total,
      observacion: observation
    })
    openNotificationWithIcon('success', 'Cotización agregada con éxito', '');
  };

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

  return (
    <>
      <div className='top'>
        <h1 className={styles.title}>
          Cotización
       </h1>
        <ShowDate />
      </div>
      <div className='cotizacionPanel'>
        <ClientForm
          handleForm={handleClientForm}
          allOk={allOk}
          clientsField={clientFields}
        />
        <div className='middle'>
          <MaterialsForm handleForm={handleMaterialForm} getTotal={handleTotal} />
        </div>
        <div className='bot'>
          <ObservationForm handleForm={handleObservationForm} />
          <TotalDisplay total={total} />
          <div className='final'>
            <Tooltip placement="top" title={"Imprimir y Guardar"}>
              <Button type="primary"
                icon={<PrinterOutlined />}
                onClick={onClick}
              >Imprimir
            </Button>
            </Tooltip>
          </div>
        </div>
      </div>
    </>)
}

export default Cotizacion;