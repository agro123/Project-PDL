import { Select, Button, Tooltip } from 'antd';
import ShowCotizacion from '../customModal/showCotizacion'
import { useState, useEffect } from 'react';
import data from '../../data/data.json'
const { Option } = Select;
const CotizacionPicker = ({ handleNumCotizacion}) => {

    const [cotizacion, setCotizacion] = useState('');
    const [disable, setDisable] = useState(true);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        handleNumCotizacion(cotizacion); 
        setDisable(isSelect)
    })

    const isSelect = () => {
        if (cotizacion == '') {
            return true;
        } return false;
    }

    const cotizacionList = () =>
        data.cotizaciones.map(c => <Option value={c.No}>{c.No}</Option>)

    const onClick = e => {
        setVisible(true)
    }

    return (
        <>
            <div className='containerDatePicker'>
                <div className="titleLine">
                    <p>Cotización</p>
                </div>
                <Tooltip placement="top" title={"Seleccionar una cotización previa"} >
                    <Select
                        value={cotizacion}
                        defaultValue="Sin cotización"
                        style={{ width: "200px" }}
                        onChange={value => {
                            setCotizacion(value);
                        }}
                    >
                        <Option value="">Seleccionar</Option>
                        {cotizacionList()}
                    </Select>
                </Tooltip>
                <Tooltip placement="bottom" title={"Ver cotización"} >
                    <Button
                        style={{ width: '100px', margin: '8px 50px 0 50px' }}
                        disabled={disable}
                        onClick={onClick}
                    >
                        Ver
                    </Button>
                </Tooltip>
                <ShowCotizacion visible={visible} index={cotizacion} onOk={()=> setVisible(false)} onCancel={()=> setVisible(false)}/>
            </div>
           
        </>
    )
}

export default CotizacionPicker;
