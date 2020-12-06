import { useState } from 'react';
import data from '../../data/data.json';
import indice from '../../data/indice.json'
import styles from '../../styles/Home.module.css';
import ClientForm from '../../components/cotizacion Editar/clientForm';
import ShowDate from '../../components/cotizacion Editar/showDate';
import MaterialsForm from '../../components/cotizacion Editar/materialsForm';
import ObservationForm from '../../components/cotizacion Editar/observacionForm';
import TotalDisplay from '../../components/cotizacion Editar/totalDisplay';
import { Button, Tooltip, notification, Modal } from 'antd';
import { PrinterOutlined, WarningTwoTone } from '@ant-design/icons';
import Link from 'next/link';

function Cotizacion() {

  console.log('se está trayendo este indice: ' + indice.indice)

  const [total, setTotal] = useState(data.cotizaciones[parseInt(indice.indice) - 1].total);
  const [client, setClient] = useState(data.cotizaciones[parseInt(indice.indice) - 1].cliente);
  const [materials, setMaterials] = useState([]);
  const [observation, setObservation] = useState(data.cotizaciones[parseInt(indice.indice) - 1].observacion);
  const [allOk, setAllOk] = useState('');
  const [visible, setVisible] = useState(false);

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
          setVisible(true);
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
      console.log("total es",total, "Correct client es",correctClient() )
      openNotificationWithIcon('error', 'Campos vacios',
        'Complete los campos para poder agregar una cotización');
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
          InputCliente= {client}
        />
        <div className='middle'>
          <MaterialsForm handleForm={handleMaterialForm} getTotal={handleTotal} 
                    dataMaterials={data.cotizaciones[parseInt(indice.indice) - 1].productos} />
        </div>
        <div className='bot'>
          <ObservationForm handleForm={handleObservationForm} 
                            inputForm= {observation} />
          <TotalDisplay inputTotal={total} />
          <div className='final'>

          <Link href= {{pathname: '/Cotizaciones/cotizaciones'}} >
                                        <Button type='default' danger>
                                            <a>Cancelar</a>
                                        </Button>
                                    </Link>
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