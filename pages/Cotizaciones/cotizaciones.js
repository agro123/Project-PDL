import styles from '../../styles/Home.module.css'
import Tablef from '../../components/corporativeFlightsTable/table'

function Cotizaciones() {
  return (
    <>
      <div>
        <h1 className={styles.title}>
          Cotizaciones
       </h1>
       <Tablef />
      </div>
    </>)
}

export default Cotizaciones;