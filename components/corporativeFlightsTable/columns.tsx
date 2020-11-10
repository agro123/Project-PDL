import { ColumnsType } from 'antd/es/table';
import Tagtable from './tags.tsx';
import { statusOptions, typeOptions, sourceOptions, angetInChargeOptions, companyOptions } from './filters/options.tsx'
import searchBarFilter from './filters/customFilter.tsx';
import rangeDateFilter from './filters/rangeDateFilter.tsx';
import dateFilter from './filters/dateFilter.tsx';
import timeFilter from './filters/timeFilter.tsx';
import dataSource from './data_table';

const Columns: ColumnsType = [
    {
        title: 'Cod.',
        dataIndex: 'reservationCode',
        key: 'reservationCode',
        ...searchBarFilter('reservationCode'),
        align: 'center',
        width: 100
    },
    {
        title: 'Cod. SC',
        dataIndex: 'scCode',
        key: 'scCode',
        ...searchBarFilter('scCode'),
        align: 'center',
        width: 100
    },
    {
        title: 'Origen',
        dataIndex: 'origin',
        key: 'origin',
        ...searchBarFilter('origin'),
        align: 'center',
        
    },
    {
        title: 'Destino',
        dataIndex: 'destiny',
        key: 'destiny',
        ...searchBarFilter('destiny'),
        align: 'center'
    },
    {
        title: 'Tipo',
        dataIndex: 'type',
        key: 'type',
        render: Tagtable,
        filters: typeOptions,
        filterMultiple: false,
        onFilter: (value: string, record: any) => record.type === value,
        align: 'center',
        width: 124
    },
    {
        title: '#Pax',
        dataIndex: 'number_passengers',
        key: 'number_passengers',
        align: 'center'
    },
    {
        title: 'Fecha',
        dataIndex: 'date',
        key: 'date',
        ...rangeDateFilter('date'),
        align: 'center'
    },
    {
        title: 'Hora',
        dataIndex: 'time',
        key: 'time',
        ...timeFilter('time'),
        align: 'center'
    },
    {
        title: 'Fecha de salida',
        dataIndex: 'departureDate',
        key: 'departureDate',
        ...dateFilter('departureDate'),
        align: 'center'
    },
    {
        title: 'A/línea',
        dataIndex: 'validating_airline',
        key: 'validating_airline',
        align: 'center'
    },
    {
        title: 'Precio',
        dataIndex: 'reservation_price',
        key: 'reservation_price',
        align: 'center',
        sorter: (a: any, b: any) => a.reservation_price - b.reservation_price,
    },
    {
        title: 'T.A',
        dataIndex: 'reservation_admin_fee',
        key: 'reservation_admin_fee',
        align: 'center',
        sorter: (a: any, b: any) => a.reservation_admin_fee - b.reservation_admin_fee,
    },
    {
        title: 'Pago',
        dataIndex: 'payment',
        key: 'payment',
        align: 'center',
    },
    {
        title: 'Estado',
        dataIndex: 'status',
        key: 'status',
        render: Tagtable,
        filters: statusOptions,
        filterMultiple: false,
        onFilter: (value: string, record: any) => record.status === value,
        align: 'center',
        width: 168
    },
    {
        title: 'Fuente',
        dataIndex: 'source',
        key: 'source',
        render: Tagtable,
        filters: sourceOptions,
        filterMultiple: false,
        onFilter: (value: string, record: any) => record.source === value,
        align: 'center',
        width: 95
    },
    {
        title: 'Encargado',
        dataIndex: 'agent_in_charge',
        key: 'agent_in_charge',
        filters: angetInChargeOptions(dataSource),
        filterMultiple: false,
        onFilter: (value: string, record: any) => record.agent_in_charge === value,
        align: 'center'
    },
    {
        title: 'Empresa',
        dataIndex: 'company',
        key: 'company',
        filters: companyOptions(dataSource),
        filterMultiple: false,
        onFilter: (value: string, record: any) => record.company === value,
        align: 'center'
    }
];

export default Columns;