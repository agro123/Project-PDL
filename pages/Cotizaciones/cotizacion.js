import styles from '../../styles/Home.module.css';
import ClientForm from '../../components/cotizacion/crear/clientForm';
import ShowDate from '../../components/cotizacion/crear/showDate';
import MaterialsForm from '../../components/cotizacion/crear/materialsForm';
import ObservationForm from '../../components/cotizacion/crear/observacionForm';
import TotalDisplay from '../../components/cotizacion/crear/totalDisplay';
import { Button } from 'antd';
import { PrinterOutlined } from '@ant-design/icons';

function Cotizacion() {

  let client;
  const handleClientForm = (e) => {
    console.log(e)
    client = e;
  }
  const handleMaterialForm = (e) => {
    console.log(e)
  }
  const handleObservationForm = (e) => {
    console.log("observation:",e)
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
          <MaterialsForm handleForm={handleMaterialForm}/>
        </div>
        <div className='bot'>
          <ObservationForm handleForm={handleObservationForm}/>
          <TotalDisplay />
          <div className='final'>
            <Button type="primary"
              icon={<PrinterOutlined />}
            >Imprimir
            </Button>
          </div>
        </div>
      </div>
    </>)
}

export default Cotizacion;