import { TimePicker, Button } from 'antd';
import { SearchOutlined, FieldTimeOutlined } from '@ant-design/icons';
import { FilterDropdownProps } from 'antd/lib/table/interface';

const TimeFilter = (dataIndex) => {
    const handleReset = (clearFilters) => {
        clearFilters();
    };
    return {
        filterDropdown: ({ setSelectedKeys, confirm, clearFilters }) => (
            <div style={{ padding: 8 }}>
                <TimePicker.RangePicker
                    format="HH:mm"
                    showNow={false}
                    style={{ marginBottom: 8 }}
                    onChange={(time, timeString) => {
                        setSelectedKeys([timeString.join("/")]);
                    }}
                />
                <div style={{ display: "block" }}>
                    <Button
                        type="primary"
                        onClick={() => confirm()}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{ width: 90, marginRight: 8 }}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() => handleReset(clearFilters)}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Reset
                    </Button>
                </div>
            </div>
        ),
        filterIcon: (filtered) => <FieldTimeOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
        onFilter: (value, record) => {
            const [init, end] = value.split('/');
            const [iHour, iMin] = init.split(':');
            const [fHour, fMin] = end.split(':');
            const initialTime = parseInt(iHour + iMin, 10);
            const finalTime = parseInt(fHour + fMin, 10);

            const [tHour, tMin] = record[dataIndex].split(':');
            const tableTime = parseInt(tHour + tMin, 10);
            const isInRange = tableTime >= initialTime && tableTime <= finalTime;

            return isInRange;
        },
        render: (text) => text
    };
}

export default TimeFilter;