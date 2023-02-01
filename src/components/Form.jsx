import { useState, useEffect } from 'react'

export const Form = ({ setClients, clients, client, setClient }) => {

    const [name, setName] = useState('')
    const [telephone, setTelephone] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')
    const [date, setDate] = useState('')
    const [comment, setComment] = useState('')

    const [error, setError] = useState(false)

    useEffect(() => {
        if (Object.keys(client).length > 0) {
            setName(client.name)
            setTelephone(client.telephone)
            setEmail(client.email)
            setNumber(client.number)
            setDate(client.date)
            setComment(client.comment)
        }

    }, [client])

    const generarId = () => {
        const random = Math.random().toString(36).substring(2)
        const fecha = Date.now().toString(36)

        return fecha + random
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if ([name, telephone, email, number, date, comment].includes('')) {
            setError(true)
        } else {
            setError(false)
        }


        const ObjetClient = {
            name,
            telephone,
            email,
            number,
            date,
            comment,


        }

        if (client.id) {
            ObjetClient.id = client.id
            const clientUpdate = clients.map(clientState => clientState.id === client.id ? ObjetClient : clientState)
            setClients(clientUpdate)
            setClient({})
        } else {
            ObjetClient.id = generarId()
            setClients([...clients, ObjetClient])
        }

        setName('')
        setTelephone('')
        setEmail('')
        setNumber('')
        setDate('')
        setComment('')
    }

    return (
        <>
            <h2 >Formulario De Reserva</h2>
            <h3>Añade Reserva</h3>
            <form onSubmit={handleSubmit}>

                {error && <div className='error'><p>FALTAN DATOS POR RELLENAR</p></div>}

                <div className='fieldContainer'>
                    <div className='form' >
                        <label className='formLabel' htmlFor="name">Nombre Cliente</label>
                        <input value={name} onChange={e => { setName(e.target.value) }} id='name' type="text" placeholder='Nombre' />
                    </div>

                    <div >
                        <label className='formLabel' htmlFor="tel">Número de Teléfono</label>
                        <input value={telephone} onChange={e => { setTelephone(e.target.value) }} id='tel' type="tel" placeholder='Teléfono' />
                    </div>

                    <div >
                        <label className='formLabel' htmlFor="email">Email del cliente</label>
                        <input value={email} onChange={e => { setEmail(e.target.value) }} id='emial' type="email" placeholder='Email' />
                    </div>

                    <div >
                        <label className='formLabel' htmlFor="number">Comensales</label>
                        <input value={number} onChange={e => { setNumber(e.target.value) }} id='number' type="number" placeholder='Número' />
                    </div>

                    <div >
                        <label className='formLabel' htmlFor="date">Fecha de reserva</label>
                        <input value={date} onChange={e => { setDate(e.target.value) }} id='date' type="date" placeholder='Añade la date' />
                    </div>

                    <div className='campo text-area'>
                        <label className='formLabel' htmlFor="comment">Alergias / Comentarios</label>
                        <textarea value={comment} onChange={e => { setComment(e.target.value) }} name="comment" id="comment" rows='9' placeholder='Comentarios'></textarea>
                    </div>
                </div>
                <div>
                    <input className='formInput' type="submit" value={client.id ? 'Editar Cliente' : 'Agregar Cliente'} />
                </div>

            </form>
        </>
    )
}
