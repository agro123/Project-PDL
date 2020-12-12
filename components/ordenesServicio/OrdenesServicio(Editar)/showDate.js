import { DatePicker } from 'antd';
import { useState, useEffect } from 'react';
import moment from 'moment';

const ShowDate = ({ handleDate, inputDate }) => {

    const dateFormat = 'DD-MM-YYYY';

    const disabledDate = (current) => {
        // Can not select days before today and today
        return current && current <= moment().endOf('day');
    }

    const [date, setDate] = useState(inputDate);

    useEffect(() => {
        handleDate(date);
    })
    return (
        <>
            <div className='containerDatePicker'>
                <div className="titleLine">
                    <p>Fecha de entrega</p>
                </div>
                <DatePicker
                    format={dateFormat}
                    defaultValue={moment(date, dateFormat)}
                    disabledDate={disabledDate}
                    onChange={(date, dateString) => { setDate(dateString), console.log("este es", dateString) }}
                    style={{ width: '200px' }}
                />
            </div>
        </>
    )
}

export default ShowDate;
