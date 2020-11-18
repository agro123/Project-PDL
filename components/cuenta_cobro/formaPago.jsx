import { Radio } from 'antd';
import SizeContext from 'antd/lib/config-provider/SizeContext';


const FormaPago = () =>{
    const styles={
        
    }

    return(
        <div>
            <h1 className="title1">Forma de pago</h1>
            <Radio.Group >
                <Radio style={{display:'block', fontSize:'15px'}} value={1} >
                    Efectivo
                </Radio>
                <Radio style={{display: 'block', fontSize:'15px' }} value={2}>
                    Tarjeta debito/credito
                </Radio>
                <Radio style={{display: 'block', fontSize:'15px'}} value={3}>
                    Cheque
                </Radio>
                <Radio style={{display: 'block', fontSize:'15px'}} value={4}>
                    Transferencia
                </Radio>
            </Radio.Group>
        
        

        </div>
    )


}

export default FormaPago