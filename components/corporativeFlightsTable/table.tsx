import { useState/* , useEffect */ } from 'react';
import { Table } from 'antd';
/* import { dataSource } from '../../undersoft_data/corporative_flights.json';  */
import dataSource from './data_table';
import columns from './columns.tsx'

const TableInfo: React.FC = () => {
    /* const [ response, setResponse ] = useState([]); */
    const [isLoading, setLoading] = useState(true);
    /* useEffect(() => {
        async function sendReq() {
          const res = dataSource;
          setResponse(res);
          setTimeout(() => setLoading(false), 500);
        }
        sendReq();
      }, []); */
      setTimeout(() => setLoading(false), 500);
    return (
        <>
            <Table
                size="small"
                scroll={{ x: '0' }}
                bordered
                columns={columns}
                dataSource={dataSource}
                pagination={false}
                loading={isLoading}
            />
        </>
    );
}
export default TableInfo;