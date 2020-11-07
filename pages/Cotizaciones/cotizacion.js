import styles from '../../styles/Home.module.css';
import ClientForm from '../../components/cotizacion/crear/clientForm';
import ShowDate from '../../components/cotizacion/crear/showDate';
import MaterialsForm from '../../components/cotizacion/crear/materialsForm';
import OtherForm from '../../components/cotizacion/crear/otherForm';
import ObservationForm from '../../components/cotizacion/crear/observacionForm';
import TotalDisplay from '../../components/cotizacion/crear/totalDisplay';
import { Button } from 'antd';
import { PrinterOutlined } from '@ant-design/icons';

function Cotizacion() {
  return (
    <>
      <div className='top'>
        <h1 className={styles.title}>
          Cotización
       </h1>
        <ShowDate />
      </div>
      <div className='cotizacionPanel'>
        <ClientForm />
        <div className='middle'>
          <MaterialsForm />
          <ObservationForm />
        </div>
        <div className='bot'>
          <OtherForm />
          <TotalDisplay />
          <div className='final'>
            <Button type="primary"
              icon={<PrinterOutlined />}
              style={{}}
            >Imprimir
            </Button>
          </div>
        </div>
      </div>
    </>)
}

export default Cotizacion;