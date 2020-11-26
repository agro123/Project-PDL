/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Input, Space, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { FilterDropdownProps } from 'antd/lib/table/interface';

const CustomFilter = (dataIndex) => {
  const handleReset = (clearFilters) => {
    clearFilters();
  };

  return {
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          placeholder={`Buscar ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [ e.target.value ] : [])}
          onPressEnter={() => confirm()}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type='primary'
            onClick={() => confirm()}
            icon ={<SearchOutlined  style={{fontSize: '12px', color: '#1890FF'}} />}
            size='middle'
            style={{ width: 100 }}
          >
            Buscar
          </Button>
          <Button onClick={() => handleReset(clearFilters)} size='small' style={{ width: 90 }}>
            Reestablecer
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => <SearchOutlined style={{ color: filtered ? '#1890FF' : undefined }} />,
    onFilter: (value, record) => 
      record[dataIndex] ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()) : false,
    render: (text) => text
  };
};

export default CustomFilter;
