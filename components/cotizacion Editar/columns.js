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
        title: 'Ancho',
        dataIndex: 'ancho',
        width: 105,
        render: (text, record, index) => (
            <Tooltip placement="top" title={"Milímetros"}>
             {text}
            </Tooltip>
        ),
    },
    {
        title: 'Alto',
        dataIndex: 'alto',
        width: 105,
        render: (text, record, index) => (
            <Tooltip placement="top" title={"Milímetros"}>
             {text}
            </Tooltip>
        ),
    },
    {
        title: 'Area',
        dataIndex: 'area',
        width: 105,
        render: (text, record, index) => (
            <Tooltip placement="top" title={"Milímetros"}>
                {text}
            </Tooltip>
        ),
    },
    {
        title: 'Precio Unitario',
        dataIndex: 'precio',
        width: 155,
        render: (text, record, index) => (formatter.format(text)),
    },
    {
        title: 'Cantidad',
        dataIndex: 'cantidad',
        width: 90
    },
    {
        title: 'Valor de venta',
        dataIndex: 'total',
        width: 130,
        render: (text, record, index) => (formatter.format(text)),
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