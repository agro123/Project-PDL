import { TimePicker, Button } from 'antd';
import { SearchOutlined, FieldTimeOutlined } from '@ant-design/icons';
import { FilterDropdownProps } from 'antd/lib/table/interface';

const TimeFilter = (dataIndex: string) => {
    const handleReset = (clearFilters: () => void) => {
        clearFilters();
    };
    return {
        filterDropdown: ({ setSelectedKeys, confirm, clearFilters }: FilterDropdownProps) => (
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
                        onClick={() => handleReset(clearFilters!)}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Reset
                    </Button>
                </div>
            </div>
        ),
        filterIcon: (filtered: any) => <FieldTimeOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
        onFilter: (value: any, record: any) => {
            const [init, end]: string = value.split('/');
            const [iHour, iMin]: any = init.split(':');
            const [fHour, fMin]: any = end.split(':');
            const initialTime = parseInt(iHour + iMin, 10);
            const finalTime = parseInt(fHour + fMin, 10);

            const [tHour, tMin]: string = record[dataIndex].split(':');
            const tableTime = parseInt(tHour + tMin, 10);
            const isInRange: boolean = tableTime >= initialTime && tableTime <= finalTime;

            return isInRange;
        },
        render: (text: string) => text
    };
}

export default TimeFilter;