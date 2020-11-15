import { useState, useEffect } from 'react';
import data from '../../data/data.json';
import styles from '../../styles/Home.module.css';
import ClientForm from '../../components/cotizacion/crear/clientForm';
import ShowDate from '../../components/cotizacion/crear/showDate';
import MaterialsForm from '../../components/cotizacion/crear/materialsForm';
import ObservationForm from '../../components/cotizacion/crear/observacionForm';
import TotalDisplay from '../../components/cotizacion/crear/totalDisplay';
import { Button, Tooltip } from 'antd';
import { PrinterOutlined } from '@ant-design/icons';

function Cotizacion() {

  const [total, setTotal] = useState(0);
  const [client, setClient] = useState({});
  const [materials, setMaterials] = useState([]);
  const [observation, setObservation] = useState('');

  useEffect(() => {
    console.log("cliente:", client)
    console.log("materiales:", materials)
    console.log("observation:", observation)
    console.log("total:", total)

  })


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
  const onClick = e => {
    data.cotizaciones.push({
      materials: [...materials], 
      client: client,
      total: total,
      observation: observation
    })
    console.log(data.cotizaciones);
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
        <ClientForm handleForm={handleClientForm} />
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