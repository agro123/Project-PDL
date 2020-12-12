//import styles from '../../styles/cotizacion.css';
import { Input } from 'antd';

const { TextArea } = Input;

const NumOrdenServ = ({ productos, numero }) => {


    return (
        <>
            <div className="informationPanel">
                <h2> Cuenta de cobro No. {numero}</h2>
                <div >
                    <div className="titleLine">
                        <p>Por concepto de</p>
                    </div>
                    <TextArea
                        value={""}
                        style={{ height: '300px' }}
                    />
                </div>

            </div>

        </>

    )
}

export default NumOrdenServ;