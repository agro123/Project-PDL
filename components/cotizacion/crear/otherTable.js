import { Table } from 'antd';

const OtherTable = () => {
    const columns = [
        {
            title: 'Descripción',
            dataIndex: 'desc',
            width: '60%',
        },
        {
            title: 'Precio',
            dataIndex: 'price',
            width: '30%',
        },
    ];
    const data = [{desc: 'Lamina de aluminio', price: 100000},
    {desc: 'Lamina de aluminio', price: 100000},
    {desc: 'Lamina de aluminio', price: 100000},
    {desc: 'Lamina de aluminio', price: 100000},
    {desc: 'Lamina de aluminio', price: 100000},
];
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

export default OtherTable;