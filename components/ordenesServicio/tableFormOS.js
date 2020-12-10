import { Input, AutoComplete,Button } from 'antd';
import ListTable from './tableOS';
import OS from '../../data/data.json';


const TableForm = () => {
    const ref= []
    
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
                        style={{ width: '31%', margin: '0 2% 2% 0' }}
                        placeholder="Cliente"
                        options={client}
                    />                   
                </Input.Group>
                
                <div className= 'Table'>
                <ListTable />
                <div />
            </div>
            </div>

            </>
        
    )
}

export default TableForm;