const formatter = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
})

export const columnsMat = [
    {
        title: 'Referencia',
        dataIndex: 'ref',
        key: 'ref',
    },
    {
        title: 'Longitud',
        dataIndex: 'length',
        key: 'length',
    },
    {
        title: 'Material',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Cantidad',
        dataIndex: 'quantity',
        key: 'quantity',
    },
    {
        title: 'Precio',
        dataIndex: 'price',
        key: 'price',
        render: (text, record, index) => (formatter.format(text)),
    },
    {
        title: 'Total',
        dataIndex: 'total',
        key: 'total',
        render: (text, record, index) => (formatter.format(text)),
    },
];
export const columnsOG = [
    {
        title: 'Descripción',
        dataIndex: 'description',
        key: 'description',
    },
    {
        title: 'Precio',
        dataIndex: 'price',
        key: 'price',
        render: (text, record, index) => (formatter.format(text)),
    }
];
export const columnsRT = [
    {
        title: 'Nombre',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Salario',
        dataIndex: 'price',
        key: 'price',
        render: (text, record, index) => (formatter.format(text)),
    }
];

export const columnsCotizacion = [
    {
        title: 'Producto',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Área',
        dataIndex: 'area',
        key: 'area',
    },
    {
        title: 'Precio',
        dataIndex: 'precio',
        key: 'precio',
        render: (text, record, index) => (formatter.format(text)),
    },
    {
        title: 'Cantidad',
        dataIndex: 'cantidad',
        key: 'cantidad',
    },
    {
        title: 'Total',
        dataIndex: 'total',
        key: 'total',
        render: (text, record, index) => (formatter.format(text)),
    },
];

export const columnsCuentaCobro = [
    {
        title: 'Referencia',
        dataIndex: 'ref',
        key: 'ref',
    },
    {
        title: 'Descripción',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Precio unitario',
        dataIndex: 'precio',
        key: 'precio',
        render: (text, record, index) => (formatter.format(text)),
    },
    {
        title: 'Cantidad',
        dataIndex: 'cantidad',
        key: 'cantidad',
    },
    {
        title: 'Valor de venta',
        dataIndex: 'total',
        key: 'total',
        render: (text, record, index) => (formatter.format(text)),
    },
];