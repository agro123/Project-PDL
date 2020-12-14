import { Radio } from 'antd';
import { useState, useEffect } from 'react';


const FormaPago = ({handlePago}) => {
    const [value, setValue] = useState("");
    useEffect(() => {
        handlePago(value);
    })
        


    return (
        <div className="pagoInfo">
            <div className="titleLine">
                <p>Forma de pago</p>
            </div>
            <Radio.Group value={value} onChange={e => setValue(e.target.value)}>
                <Radio style={{ display: 'block', fontSize: '15px' }} value={"efectivo"} >
                    Efectivo
                </Radio>
                <Radio style={{ display: 'block', fontSize: '15px' }} value={"tarjeta"}>
                    Tarjeta debito/credito
                </Radio>
                <Radio style={{ display: 'block', fontSize: '15px' }} value={"cheque"}>
                    Cheque
                </Radio>
                <Radio style={{ display: 'block', fontSize: '15px' }} value={"transferencia"}>
                    Transferencia
                </Radio>
            </Radio.Group>
        </div>
    )


}

export default FormaPago