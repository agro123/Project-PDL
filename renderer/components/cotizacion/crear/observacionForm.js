import { Input } from 'antd';
import { useState, useEffect } from 'react'
const { TextArea } = Input;

const ObservacionForm = ({ handleForm }) => {
    const [value, setValue] = useState('');
    useEffect(() => {
        handleForm(value);
    })

    const onChange = e => {
        setValue(e.target.value);
    };

    return (
        <>
            <div className='observationForm'>
                <div className="titleLine">
                    <p>Observaciones</p>
                </div>
                <TextArea
                    value={value}
                    onChange={onChange} 
                    style={{ height: '170px' }} />
            </div>
        </>
    )
}

export default ObservacionForm;