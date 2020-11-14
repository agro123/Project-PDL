import { MinusCircleOutlined } from '@ant-design/icons'
const columns = (onDelete) => [
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
        width: 145
    },
    {
        title: '',
        dataIndex: '',
        key: 'x',
        width: 25,
        render: (text, record) => (
            <MinusCircleOutlined onClick={(e) => { onDelete(record.key, e); }} />
        ),
    }
    
];

export default columns;