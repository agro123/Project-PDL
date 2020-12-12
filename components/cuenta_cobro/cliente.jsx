
const Cliente = ({ cliente }) => {

    return (
        <>
            <div className="clientInfo">
                <div className="titleLine">
                    <p>Cliente</p>
                </div>
                <div>
                    <p className='margenLetra'>{cliente.name}</p>
                    <p className='margenLetra'>{cliente.id}</p>
                    <p className='margenLetra'>{cliente.address}</p>
                    <p className='margenLetra'>{cliente.phoneNumb}</p>
                    <p className='margenLetra'>{cliente.email}</p>
                </div>
            </div>
        </>
    )
}

export default Cliente;