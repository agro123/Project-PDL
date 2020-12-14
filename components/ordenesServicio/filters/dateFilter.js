import { DatePicker, Button, Space } from 'antd';
import { SearchOutlined, CalendarOutlined } from '@ant-design/icons';
import { FilterDropdownProps } from 'antd/lib/table/interface';

const DateFilter = (dataIndex) => {
    const handleReset = (clearFilters) => {
        clearFilters();
    };
    return ({
        filterDropdown: ({ setSelectedKeys, confirm, clearFilters }) => (
            <div style={{ padding: 8 }}>
                <DatePicker
                    placeholder="Seleccionar"
                    style={{ width: 188, marginBottom: 8, display: "block" }}
                    format="DD-MM-YYYY"
                    onChange={e =>
                        setSelectedKeys(e ? [e.format("DD-MM-YYYY")] : [])
                    }
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => confirm()}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Buscar
                        </Button>
                    <Button
                        onClick={() => handleReset(clearFilters)}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Restaurar
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered) =>
            (<CalendarOutlined style={{ color: filtered ? "#1890ff" : undefined }} />),
        onFilter: (value, record) => {
            return record[dataIndex] ? record[dataIndex].toString().includes(value) : ""
        },
    });
}

export default DateFilter;