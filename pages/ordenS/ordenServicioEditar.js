import { useEffect, useState } from 'react';
import data from '../../data/data.json';
import styles from '../../styles/Home.module.css';
import ClientForm from '../../components/cotizacion/crear/clientForm';
import ShowDate from '../../components/OrdenesServicio(Crear)/showDate';
import CotizacionPicker from '../../components/OrdenesServicio(Crear)/cotizacionPicker';
import MaterialsForm from '../../components/ordenesServicio/OrdenesServicio(Editar)/materialsForm';
import OtrosGastosForm from '../../components/ordenesServicio/OrdenesServicio(Editar)/otrosGastosForm';
import ResponsablesForm from '../../components/ordenesServicio/OrdenesServicio(Editar)/responsablesForm';
import ObservationForm from '../../components/cotizacion Editar/observacionForm';
import TotalDisplay from '../../components/cotizacion/crear/totalDisplay';
import { Button, Tooltip, notification, Modal, Space } from 'antd';
import Link from 'next/link'
import { SaveOutlined, ExclamationCircleOutlined } from '@ant-design/icons';

function OrdenServicioEditar() {



  const [total, setTotal] = useState(0);
  const [total1, setTotal1] = useState(0);
  const [total2, setTotal2] = useState(0);
  const [total3, setTotal3] = useState(0);

  const [client, setClient] = useState(data.ordenServicio[parseInt(data.indice) - 1].cliente);
  const [materials, setMaterials] = useState([]);
  const [otrosGastos, setOtrosGastos] = useState([]);
  const [responsables, setResponsables] = useState([]);
  const [observation, setObservation] = useState(data.ordenServicio[parseInt(data.indice) - 1].observaciones);
  const [date, setDate] = useState(data.ordenServicio[parseInt(data.indice) - 1].fechaFinal);
  const [numCotizacion, setNumCotizacion] = useState(data.ordenServicio[parseInt(data.indice) - 1].cotizacionNum)
  const [allOk, setAllOk] = useState('');

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

  useEffect(() => {
    setTotal(total1 + total2 + total3)
  })
  //--------------------------------------------------------------------------------
  const handleClientForm = e => {
    setClient(e);
  }

  const handleMaterialForm = e => {
    setMaterials(e);
   /*  console.log("materiales", e) */
  }
  const handleOtrosGastosForm = e => {
    setOtrosGastos(e);
    /* console.log("OtrosGastos", e) */
  }
  const handleResponsablesForm = e => {
    setResponsables(e);
    /* console.log("Responsables", e) */
  }
  const handleObservationForm = e => {
    setObservation(e);
  }
  const handleDate = e => {
    setDate(e);
/*     console.log("FECHA:", e); */
  }
  const handleNumCotizacion = e => {
    setNumCotizacion(e);
  }

  const handleTotalMaterials = e => {
    setTotal1(e);
  }
  const handleTotalOtrosGastos = e => {
    setTotal2(e);
  }
  const handleTotalResponsables = e => {
    setTotal3(e);
  }

  const clientFields = e => {
    setAllOk('');
  }

  const onClick = e => {
    if (correctClient() || total != "0" || date != "") {//Verifica que existan datos necesarios para hacer una orden de servicio

      if (correctClient()) {//Verifica que los datos de cliente esten completos

        if (total1 != "0") {//Verifica que la lista de materiales este completa

          if (total3 != "0") { //verfica que la lista responsables este completa
            if (date != "") { //verfica que la fecha exista
              confirm();
            } else {
              openNotificationWithIcon('error', 'No ha seleccionado una fecha de entrega',
                'Por favor seleccione  una fecha de entrega para que sea posible guardar la orden de servicio.');
            }
          } else {
            openNotificationWithIcon('error', 'Lista de Responsables vacía',
              'Por favor agregue trabajadores para que sea posible guardar la orden de servicio.');
          }
        } else {
          openNotificationWithIcon('error', 'Lista de Materiales vacía',
            'Por favor agregue materiales  para que sea posible guardar la orden de servicio.');
        }
      } else {
        openNotificationWithIcon('error', 'Campos vacios en cliente',
          'Los campos Nombre e Identificación son obligatorios. Por favor verifique que estén completos.');
        setAllOk('error');

      }
    } else {
      openNotificationWithIcon('error', 'Campos vacios',
        'Complete los campos para poder agregar una Orden de servicio');
    }
  }

  const handleOk = e => {
    data.ordenServicio.push({
      No: data.ordenServicio.length + 1,
      materials: [...materials],
      otrosGastos: [...otrosGastos],
      responsables: [...responsables],
      cliente: client,
      total: total,
      observaciones: observation,
      fechaFinal: date,
      cotizacionNum: numCotizacion
    })
    openNotificationWithIcon('success', 'Orden de servicio agregada con éxito', '');
  };
  const confirm = () => {
    Modal.confirm({
      title: "¿Está seguro de realizar esta operación?",
      icon: <ExclamationCircleOutlined />,
      content:
        "Por favor verifique que todos los datos estén bien antes de hacer clic en Aceptar.",
      okText: "Aceptar",
      cancelText: "Cancelar",
      onOk() { handleOk() },
    });
  }

  return (
    <>
      <div className='top'>
        <h1 className={styles.title}>
          Orden de Servicio (Editar)
       </h1>
        <ShowDate handleDate={handleDate} />
      </div>
      <div className='cotizacionPanel'>
        <div className='topOS'>
          <ClientForm
            handleForm={handleClientForm}
            allOk={allOk}
            clientsField={clientFields}
          />
          <CotizacionPicker handleNumCotizacion={handleNumCotizacion} />
        </div>
        <div className='middleOS'>
          <MaterialsForm handleForm={handleMaterialForm} getTotal={handleTotalMaterials}
                          dataMaterials={data.ordenServicio[parseInt(data.indice) - 1].materiales} />
        </div>
        <div className='middleOS'>
          <OtrosGastosForm handleForm={handleOtrosGastosForm} getTotal={handleTotalOtrosGastos} 
                            dataOtrosGastos={data.ordenServicio[parseInt(data.indice) - 1].otrosGastos} />
          <ResponsablesForm handleForm={handleResponsablesForm} getTotal={handleTotalResponsables} 
                            dataResponsables={data.ordenServicio[parseInt(data.indice) - 1].responsables} />
        </div>
        <div className='bot'>
          <ObservationForm handleForm={handleObservationForm}
                            inputForm={observation} />
          <TotalDisplay total={total} />
          <div className='final'>
            <Space>

            <Link href= {{pathname: '/ordenS/ordenesServicio'}} >
                                <Button type='default' danger>
                                    <a>Volver</a>
                                </Button>
                            </Link>

            <Tooltip placement="top" title={"Guardar"}>
              <Button type="primary"
                icon={<SaveOutlined />}
                onClick={onClick}
              >Guardar
            </Button>
            </Tooltip>


            </Space>
            
          </div>
        </div>
      </div>
    </>)
}

export default OrdenServicioEditar;