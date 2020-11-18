import styles from '../../styles/Home.module.css'
import ShowDate from '../../components/cotizacion/crear/showDate';
import NumOrdenServ from '../../components/cuenta_cobro/numOrdenSer';
import FormaPago from '../../components/cuenta_cobro/formaPago.jsx';
import Cliente from '../../components/cuenta_cobro/cliente'
import Total from '../../components/cuenta_cobro/total.jsx'
function CuentaCobro() {
  return (
    <div style={{margin:'1%'}}>
      <div className='top'>
        <h1 className={styles.title}>
          Cuenta de cobro
        </h1>
        <ShowDate />
      </div>
      <div>
         <NumOrdenServ />        
      </div>
      <div style={{display: 'flex'}}>
        <FormaPago />
        <Cliente />
        <Total />
      </div>
      

    </div>
    )
}

export default CuentaCobro;