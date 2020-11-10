import { DatePicker, Button } from 'antd';
import { SearchOutlined, CalendarOutlined } from '@ant-design/icons';
import { FilterDropdownProps } from 'antd/lib/table/interface';
/* import esEs from 'antd/es/locale/es_ES'; */

const RangeDateFilter = (dataIndex: string) => {
    const handleReset = (clearFilters: () => void) => {
        clearFilters();
    };
    return {
        filterDropdown: ({ setSelectedKeys, confirm, clearFilters }: FilterDropdownProps) => (
            <div style={{ padding: 8 }}>
                <DatePicker.RangePicker
                    style={{ marginBottom: 8 }}
                    onChange={(value, dateString) => setSelectedKeys([dateString.join("/")])}
                    onOk={() => confirm()}
                />
                <div style={{ display: "block" }}>
                    <Button
                        type="primary"
                        onClick={() => confirm()}
                        icon={<SearchOutlined style={{ fontSize: '12px' }} />}
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
        filterIcon: (filtered: any) => <CalendarOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
        onFilter: (value: any, record: any) => {
            const [init, end]: string = value.split('/');
            const [iYear, iMonth, iDay]: any = init.split('-');
            const [fYear, fMonth, fDay]: any = end.split('-');
            const initialDate = parseInt(iYear + iMonth + iDay, 10);
            const finalDate = parseInt(fYear + fMonth + fDay, 10);

            const [tYear, tMonth, tDay]: string = record[dataIndex].split('-');
            const tableDate = parseInt(tYear + tMonth + tDay, 10);
            const isInRange: boolean = tableDate >= initialDate && tableDate <= finalDate;

            return isInRange;
        },
        render: (text: string) => text
    };
}

export default RangeDateFilter;