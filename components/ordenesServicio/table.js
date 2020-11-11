import { Table } from 'antd';
import OS from '../data/OS.json'

const ListTable = () => {
    const columns = [
        {
            title: 'No.',
            dataIndex: 'id',
            width: 80
        }, {
            title: 'Cliente',
            dataIndex: 'name',
            width: 300
        },
        {
            title: 'Fecha',
            dataIndex: 'date',
            width: 300
        },
        {
            title: 'Valor',
            dataIndex: 'value',
            width: 150
        },
        {
            
        }

    ];

    const ordenes = []

    const lista = () => {

        OS.OrdenServicio.map(os => {
            ordenes.push(
                {
                    key: os.id,
                    name: os.name,
                    id: os.id,
                    date: os.date,
                    value: os.value
                }
            )
        })
    }

    lista()


    return (
        <>
            <Table columns={columns}
                dataSource={ordenes}
                showHeader={true}
                
                scroll={{
                    y: 400
                }}
                size="large"
                pagination={true}
            />
        </>
    )
}

export default ListTable;