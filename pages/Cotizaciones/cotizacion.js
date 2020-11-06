import styles from '../../styles/Home.module.css'
import ClientForm from '../../components/cotizacion/crear/clientForm'
import ShowDate from '../../components/cotizacion/crear/showDate'



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
      </div>
    </>)
}

export default Cotizacion;