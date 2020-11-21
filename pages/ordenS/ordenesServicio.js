import styles from '../../styles/Home.module.css'
import TableForm from '../../components/ordenesServicio/tableFormOS';

function OrdenesServicio() {
  return (
    <>
      <div>
        <h1 className={styles.title}>
          Ordenes de servicio 
       </h1>
       <div className= "listadoPanel">
         <TableForm />
       </div>
      </div>
    </>)
}

export default OrdenesServicio;