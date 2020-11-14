import { Input } from 'antd';
const { TextArea } = Input;

const ObservacionForm = () => {

    return (
        <>
            <div className='observationForm'>
                <div className="titleLine">
                    <p>Observaciones</p>
                </div>
                <TextArea showCount autoSize={false} style={{height: '170px'}}/>
            </div>
        </>
    )
}

export default ObservacionForm;