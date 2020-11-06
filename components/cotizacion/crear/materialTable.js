import { Table } from 'antd';

const MaterialsTable = () => {
    const columns = [
        {
            title: 'Referencia',
            dataIndex: 'ref',
            width: 126,
        },
        {
            title: 'Material',
            dataIndex: 'mat',
            width: 250,
        },
        {
            title: 'Precio Unitario',
            dataIndex: 'unitPrice',
            width: 126
        },
        {
            title: 'Cantidad',
            dataIndex: 'cant',
            width: 85
        },
        {
            title: 'Total',
            dataIndex: 'total',
        },
    ];
    const data = [{ ref: 55667, mat: 'Lamina de aluminio', unitPrice: 100000, cant: 1, total: 100000 },
    { ref: 55667, mat: 'Lamina de aluminio', unitPrice: 100000, cant: 1, total: 100000 },
    { ref: 55667, mat: 'Lamina de aluminio', unitPrice: 100000, cant: 1, total: 100000 },
    { ref: 55667, mat: 'Lamina de aluminio', unitPrice: 100000, cant: 1, total: 100000 },
    { ref: 55667, mat: 'Lamina de aluminio', unitPrice: 100000, cant: 1, total: 100000 },];
    return (
        <>
            <Table columns={columns}
                dataSource={data}
                showHeader={false}
                scroll={{
                  y: 150  
                }}
                size='small'
                pagination={false}
            />
        </>
    )
}

export default MaterialsTable;