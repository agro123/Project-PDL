import { useState, useEffect } from 'react';

const TotalDisplay = ({total}) => {

    const formatter = new Intl.NumberFormat('es-CO',{
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0
      })

    return (
        <>
            <div className='totalDisplay'>
                <div className="titleLine">
                    <p>Total</p>
                </div>
                <p className="total">{formatter.format(total)}</p>
            </div>

        </>
    )
}

export default TotalDisplay;