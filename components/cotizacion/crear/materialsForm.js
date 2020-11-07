import { Input, AutoComplete,Button } from 'antd';
import {PlusOutlined} from '@ant-design/icons';
import MaterialsTable from './materialTable';
const MaterialsForm = () => {
    const ref = [
        {
            value: "32414",
            label: "32414",
        },
        {
            value: "55667",
            label: "55667",

        }
    ];
    const mat = [
        {
            value: "Lamina de aluminio",
            label: "Lamina de aluminio",
        },
        {
            value: "Lamina de acero",
            label: "Lamina de acero",

        }
    ];
    return (
        <>
            <div className="materialsForm">
                <div className="titleLine">
                    <p>Materiales</p>
                </div>
                <Input.Group style={{display: 'flex'}}>
                    <AutoComplete
                        style={{ width: '15%', margin: '0 2% 2% 0' }}
                        placeholder="Referencia"
                        options={ref}
                    />
                    <AutoComplete
                        style={{ width: '25%', margin: '0 2% 2% 0', flex: 'auto' }}
                        placeholder="Material"
                        options={mat}
                    />
                    <Input
                        style={{ width: '15%', margin: '0 2% 2% 0' }}
                        placeholder="Precio unit."
                    />
                    <Input
                        style={{ width: '10%', margin: '0 2% 2% 0' }}
                        placeholder="Cant."
                    />
                    <Input
                        style={{ width: '15%', margin: '0 2% 2% 0' }}
                        placeholder="Total"
                    />
                    <Button type="primary" shape="circle" icon={<PlusOutlined />} />
                </Input.Group>
                <MaterialsTable />
            </div>
        </>
    )
}

export default MaterialsForm;