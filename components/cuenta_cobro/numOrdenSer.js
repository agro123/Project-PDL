//import styles from '../../styles/cotizacion.css';
import { Input, AutoComplete} from 'antd';




const NumOrdenServ = () => {

    const {TextArea} = Input;

    const style1 ={ width: '250px'};
    const style2 ={ width: '100%', height: '200px' };

    return(
       
            <div>
                <h1>
                    Orden de servicio
                </h1>
                <input 
                    placeholder='No. Orden'
                    style={style1}
                /> 
                <h2 style={{marginTop:'50px'}}>Cuenta de Cobro No. 1</h2>

                <h1 className='tabla'>Por concepto de</h1>
                <TextArea
                    style={style2}
                />

            </div>
        
        
    )
}

export default NumOrdenServ;