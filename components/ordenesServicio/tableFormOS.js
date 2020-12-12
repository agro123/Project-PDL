import { Input, AutoComplete, Button } from 'antd';
import ListTable from './tableOS';
import OS from '../../data/data.json';


const TableForm = () => {
    const ref = []

    {
        OS.ordenServicio.map(os => {
            ref.push(
                {
                    value: os.id,
                    label: os.id
                }
            )
        })
    };

    const client = []
    {
        OS.ordenServicio.map(os => {
            client.push(
                {
                    value: os.name,
                    label: os.name
                }
            )
        })
    };

    return (
        <>
            <div className='cotizacionPanel'>
                <div className="TableForm">
                    <div className="titleLine"></div>
                    <div className='Table'>
                        <ListTable />
                        <div />
                    </div>
                </div>
            </div>
        </>
    )
}

export default TableForm;