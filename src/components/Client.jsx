
export const Client = ({ client, setClient, deleteClient }) => {

    const { name, telephone, email, number, date, comment, id } = client
    return (
        <div className='reservationData'>
            <div>
                <p>Nombre del Cliente: <span>{name}</span></p>
                <p>Nº de Teléfono del Cliente: <span>{telephone}</span></p>
                <p>Email del Cliente: <span>{email}</span></p>
                <p>Número de personas: <span>{number}</span></p>
                <p>Fecha de reserva: <span>{date}</span></p>
                <p>Alergías y otros: <span className="client-span">{comment}</span></p>
            </div>
            <div className='client-buttons'>
                <div>
                    <button className="client-editButton" onClick={() => setClient(client)} type="button">Editar</button>
                </div>
                <div>
                    <button className="client-deleteButton" onClick={() => deleteClient(id)} type="button">Eliminar</button>
                </div>
            </div>
        </div>
    )
}
