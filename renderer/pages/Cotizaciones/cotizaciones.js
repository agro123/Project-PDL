import styles from '../../styles/Home.module.css'
import {Button} from 'antd';
import data from '../../data/data.json';
function Cotizaciones() {

  onclick = e => {
    console.log(data.cotizaciones)
  }
  return (
    <>
      <div>
        <h1 className={styles.title}>
          Cotizaciones
       </h1>
       <Button onClick={onclick}>soy un boton</Button>
      </div>
    </>)
}

export default Cotizaciones;