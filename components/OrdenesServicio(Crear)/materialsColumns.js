import { MinusCircleOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';

const formatter = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
})
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
        title: 'Logitud',
        dataIndex: 'length',
        width: 110,
        render: (text, record, index) => (
            <Tooltip placement="top" title={"Milímetros"}>
             {text}
            </Tooltip>
        ),
    },
    {
        title: 'Cantidad',
        dataIndex: 'quantity',
        width: 100
    },
    {
        title: 'Valor',
        dataIndex: 'price',
        width: 140
    },
    {
        title: 'Total',
        dataIndex: 'total',
        width: 130
    },
    {
        title: '',
        dataIndex: '',
        key: 'x',
        width: 25,
        render: (text, record) => (
            <Tooltip placement="top" title={"Eliminar"}>
                <MinusCircleOutlined onClick={(e) => { onDelete(record.key, e); }} />
            </Tooltip>
        ),
    }

];

export default columns;