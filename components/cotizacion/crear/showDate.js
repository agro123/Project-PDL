const ShowDate = () => {
    let date = new Date()

    let day = date.getDate()
    let month = date.getMonth() + 1
    let year = date.getFullYear()

    return (
        <>
            <div className='containerDate'>
                <div className="titleLine">
                    <p>Fecha</p>
                </div>
                <p className="date">{day+" - "+month+" - "+year}</p>
            </div>
        </>
    )
}

export default ShowDate;
