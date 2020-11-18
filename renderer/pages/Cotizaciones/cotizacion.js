import { useState, useEffect } from 'react';
import data from '../../data/data.json';
import styles from '../../styles/Home.module.css';
import ClientForm from '../../components/cotizacion/crear/clientForm';
import ShowDate from '../../components/cotizacion/crear/showDate';
import MaterialsForm from '../../components/cotizacion/crear/materialsForm';
import ObservationForm from '../../components/cotizacion/crear/observacionForm';
import TotalDisplay from '../../components/cotizacion/crear/totalDisplay';
import { Button, Tooltip, notification, Modal } from 'antd';
import { PrinterOutlined, WarningTwoTone } from '@ant-design/icons';

function Cotizacion() {

  const [total, setTotal] = useState(0);
  const [client, setClient] = useState({});
  const [materials, setMaterials] = useState([]);
  const [observation, setObservation] = useState('');
  const [allOk, setAllOk] = useState('');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    console.log("cliente:", client)
    console.log("materiales:", materials)
    console.log("observation:", observation)
    console.log("total:", total)
  })
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
    if (correctClient()) {
      if (total != 0) {
        setVisible(true);
      } else {
        openNotificationWithIcon('error', 'Lista de productos vacía', 'Por favor agregue un producto a cotizar para que sea posible imprimir la cotización.');
      }

    } else {
      openNotificationWithIcon('error', 'Campos vacios en cliente', 'Los campos Nombre e Identificación son obligatorios. Por favor verifique que estén completos.');
      setAllOk('error');

    }
  }
  const handleOk = e => {
    data.cotizaciones.push({
      materials: [...materials],
      client: client,
      total: total,
      observation: observation
    })
    openNotificationWithIcon('success', 'Cotización agregada con éxito', '');
    setVisible(false);
  };
  const handleCancel = e => {
    setVisible(false);
  };

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
      <Modal
        title={'¿Está seguro de realizar esta Operación?'}
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Por favor verifique que todos los datos estén bien antes de hacer clic en OK.</p>
      </Modal>
    </>)
}

export default Cotizacion;