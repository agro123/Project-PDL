
export const statusOptions = [
    {
        text: 'Cancelados',
        value: 'Cancelado',
    },
    {
        text: 'Reservados',
        value: 'Reservado',
    },
    {
        text: 'Pagados',
        value: 'Pagado',
    },
    {
        text: 'Pendientes por Emitir',
        value: 'Pendiente por Emitir',
    },
    {
        text: 'Emitidos',
        value: 'Emitido',
    },
    {
        text: 'Facturados',
        value: 'Facturado',
    },
];

export const typeOptions = [
    {
        text: 'Ida y Regreso',
        value: 'Ida y Regreso',
    },
    {
        text: 'Solo Ida',
        value: 'Solo Ida',
    },
];

export const sourceOptions = [
    {
        text: 'Call',
        value: 'Call',
    },
    {
        text: 'Portal',
        value: 'Portal',
    },
];
const unique = (array) => {
    const hash = {};
    const newArray = array.filter((current) => {
        const go = String(current.value);
        const exists = !hash[go] || false;
        hash[go] = true;
        return exists;
    });
    return newArray;
}

export const angetInChargeOptions = (dataSource)=> {
    const d = dataSource.map((comp) => (
        {
            text: comp.agent_in_charge,
            value: comp.agent_in_charge
        })
    )
    return unique(d);
}

export const companyOptions = (dataSource) => {
    const d = dataSource.map((comp) => (
        {
            text: comp.company,
            value: comp.company
        })
    )
    return unique(d)
};

