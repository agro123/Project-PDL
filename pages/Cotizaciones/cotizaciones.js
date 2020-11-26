import styles from '../../styles/Home.module.css'
import TableFormCotizaciones from '../../components/cotizaciones/tableFormCotizaciones';

function Cotizaciones() {

  return (
    <>
      <div>
        <h1 className={styles.title}>
          Cotizaciones
       </h1>
       <div className= "listadoPanel">
         <TableFormCotizaciones />
       </div>
      </div>
    </>)
}

export default Cotizaciones;