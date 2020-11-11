import { Input, AutoComplete,Button } from 'antd';
import {PlusOutlined} from '@ant-design/icons';
import ListTable from '../ordenesServicio/table';
import OS from '../data/OS.json'


const TableForm = () => {
    const ref= []
    
        {
           OS.OrdenServicio.map(os => {
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
            OS.OrdenServicio.map(os => {
                 client.push(
                     {
                         value: os.name,
                         label: os.name
                     }
                 )
             })
         };

         console.log(ref)
         console.log(client)
    return (
        <>
            <div className="TableForm">
                <div className="titleLine">
                   
                </div>
                <Input.Group style={{display: 'flex'}}>
                    
                    <AutoComplete
                        style={{ width: '8%', margin: '0 2% 2% 0'}}
                        placeholder="No."
                        options={ref}
                    />
                    <AutoComplete
                        style={{ width: '34%', margin: '0 2% 2% 0' }}
                        placeholder="Cliente"
                        options={client}
                    />                   
                    <Input
                        style={{ width: '34%', margin: '0 2% 2% 0' }}
                        placeholder="Fecha"
                    />
                </Input.Group>
                <ListTable />
            </div>
        </>
    )
}

export default TableForm;