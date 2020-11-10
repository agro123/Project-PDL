import { Tag } from 'antd';

export default function Tagtable(tag: string): JSX.Element {
    let color = ''
    switch (tag) {
        case 'Cancelado' || 'cancelado':
            color = 'red';
            break;
        case 'Reservado' || 'reservado':
            color = 'geekblue';
            break;
        case 'Emitido' || 'emitido':
            color = 'blue';
            break;
        case 'Pagado' || 'pagado':
            color = 'cyan';
            break;
        case 'Facturado' || 'facturado':
            color = 'green';
            break;
        case 'Pendiente por Emitir' || 'pendiente por emitir':
            color = 'volcano';
            break;

        case 'Solo Ida' || 'solo ida':
            color = 'purple';
            break;

        case 'Call':
            color = 'green';
            break;
        case 'Portal':
            color = 'geekblue';
            break;

        default:
            color = 'magenta';
            break;
    }

    return (
        <Tag color={color} key={tag}>
            {tag}
        </Tag>
    );
}

