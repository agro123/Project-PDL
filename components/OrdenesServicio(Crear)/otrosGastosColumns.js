import { MinusCircleOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';

const formatter = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
})
const columns = (onDelete) => [
   
    {
        title: 'Material',
        dataIndex: 'description',
    },
    {
        title: 'Valor',
        dataIndex: 'price',
        width: 160
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