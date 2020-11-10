import styles from '../../styles/Home.module.css'
import Table from '../../components/corporativeFlightsTable/table.tsx'

function Cotizaciones() {
  return (
    <>
      <div>
        <h1 className={styles.title}>
          Cotizaciones
       </h1>
       <Table />
      </div>
    </>)
}

export default Cotizaciones;