import styles from '../../styles/Home.module.css';
import TableCuentaCobro from '../../components/cuenta_cobro_ver/table';
import { Table } from 'antd';

function CuentasCobro() {
  return (
    <>
      <div>
        <h1 className={styles.title}>
          Cuentas de cobro
       </h1>
        <div className='cotizacionPanel'>
          <TableCuentaCobro />
        </div>
      </div>
    </>)
}

export default CuentasCobro;