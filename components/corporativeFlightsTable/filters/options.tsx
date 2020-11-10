interface Option { value: string, text: string }
export const statusOptions: Option[] = [
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

export const typeOptions: Option[] = [
    {
        text: 'Ida y Regreso',
        value: 'Ida y Regreso',
    },
    {
        text: 'Solo Ida',
        value: 'Solo Ida',
    },
];

export const sourceOptions: Option[] = [
    {
        text: 'Call',
        value: 'Call',
    },
    {
        text: 'Portal',
        value: 'Portal',
    },
];
const unique = (array: Option[]) => {
    const hash = {};
    const newArray = array.filter((current: Option) => {
        const go = String(current.value);
        const exists = !hash[go] || false;
        hash[go] = true;
        return exists;
    });
    return newArray;
}

export const angetInChargeOptions = (dataSource: any): Option[] => {
    const d: Option[] = dataSource.map((comp: any) => (
        {
            text: comp.agent_in_charge,
            value: comp.agent_in_charge
        })
    )
    return unique(d);
}

export const companyOptions = (dataSource: any): Option[] => {
    const d: Option[] = dataSource.map((comp: any) => (
        {
            text: comp.company,
            value: comp.company
        })
    )
    return unique(d)
};

