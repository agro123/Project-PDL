import { Input, AutoComplete } from 'antd';

const ClienteForm = () => {

    const options = [
        {
            value: "Juanito Alcachofa",
            label: "Juanito Alcachofa",
        },
        {
            value: "Armando Casas de Papel",
            label: "Armando Casas de Papel",

        }
    ];

    const style ={ width: '195px', margin: '0 2% 2% 0' };    
 
    return (
        <>
            <div className="clientForm">
                <div className="titleLine">
                    <p>Cliente</p>
                </div>

                <Input.Group>
                    <AutoComplete
                        style={style}
                        placeholder="Nombre"
                        options={options}
                    />

                    <AutoComplete
                        style={{ width: '195px', margin: '0 0 2% 0' }}
                        placeholder="Identificación"
                        options={options}
                    />
                    <Input
                        style={style}
                        placeholder="Dirección"
                    />
                    <Input
                        style={{ width: '195px', margin: '0 0 2% 0' }}
                        placeholder="Teléfono"
                    />
                    <Input
                        style={{ width: '195px', margin: '0 2% 0 0' }}
                        placeholder="Correo Electronico"
                    />
                </Input.Group>

            </div>
        </>
    )
}

export default ClienteForm;