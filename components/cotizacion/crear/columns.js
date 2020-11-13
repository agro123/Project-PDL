/* const MaterialsTable = ({ dataRecive }) => { */
    
    const columns = [
        {
            title: 'Referencia',
            dataIndex: 'ref',
            width: 105,
        },
        {
            title: 'Material',
            dataIndex: 'name',
        },
        {
            title: 'Ancho',
            dataIndex: 'width',
            width: 95,
        },
        {
            title: 'Alto',
            dataIndex: 'heigth',
            width: 95,
        },
        {
            title: 'Area',
            dataIndex: 'area',
            width: 95,
        },
        {
            title: 'Precio Unitario',
            dataIndex: 'price',
            width: 155
        },
        {
            title: 'Cantidad',
            dataIndex: 'quantity',
            width: 90
        },
        {
            title: 'Valor de venta',
            dataIndex: 'saleValue',
            width: 175
        },
    ];
/* 

    return (
        <>
            <Table columns={columns}
                dataSource={dataRecive}
                showHeader={false}
                scroll={{
                  y: 150  
                }}
                size='small'
                pagination={false}
            />
        </>
    )
} */

export default columns;