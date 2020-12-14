import styles from '../../styles/Home.module.css'
import TableFormCotizaciones from '../../components/cotizacionVer/tableFormCotizaciones';

function Cotizaciones() {

  return (
    <>
      <div>
        <h1 className={styles.title}>
          Cotizaciones
       </h1>
        <div className='cotizacionPanel'>
          <TableFormCotizaciones />
        </div>
      </div>
    </>)
}

export default Cotizaciones;