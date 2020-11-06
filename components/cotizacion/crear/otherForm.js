import { Input, Button } from 'antd';
import {PlusOutlined} from '@ant-design/icons';
import OtherTable from './otherTable';
const otherForm = () => {

    return (
        <>
            <div className="otherForm">
                <div className="titleLine">
                    <p>Otros gastos</p>
                </div>
                <Input.Group style={{display: 'flex'}}>
                    <Input
                        style={{ width: '70%', margin: '0 2% 2% 0' }}
                        placeholder="Descripcion"
                    />
                    <Input
                        style={{ width: '30%', margin: '0 2% 2% 0' }}
                        placeholder="Precio"
                    />
                    <Button type="primary" shape="circle" icon={<PlusOutlined />} />
                </Input.Group>
                <OtherTable />
            </div>
        </>
    )
}

export default otherForm;