import styles from '../../styles/Home.module.css'
import NumericInput from '../../components/constants/numericInput';
import { useState, useEffect } from 'react';

function Cotizaciones() {
  const [value, setvalue] = useState('')

  const onChange = value => {
    setvalue(value);
  };
  return (
    <>
      <div>
        <h1 className={styles.title}>
          Cotizaciones
       </h1>
        <NumericInput
        placeHolder ="num"
          value={value}
          onChange={onChange}
        />
      </div>
    </>)
}

export default Cotizaciones;