import { DatePicker } from 'antd';
import { useState, useEffect } from 'react';
import moment from 'moment';

const ShowDate = ({ handleDate }) => {
    const disabledDate = (current) => {
        // Can not select days before today and today
        return current && current < moment().endOf('day');
    }
    const [date, setDate] = useState('');
    useEffect(() => {
        handleDate(date);
    })
    return (
        <>
            <div className='containerDatePicker'>
                <div className="titleLine">
                    <p>Fecha de entrega</p>
                </div>
                <DatePicker format="DD-MM-YYYY"
                    disabledDate={disabledDate}
                    onChange={(date, dateString) => { setDate(dateString) }}
                    style={{width:'200px'}}
                />
            </div>
        </>
    )
}

export default ShowDate;
