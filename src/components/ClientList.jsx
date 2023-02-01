import { Client } from "./Client"

export const ClientList = ({ clients, setClient, deleteClient }) => {


  return (

    <div className="clientList">
      {clients && clients.length ? (
        <>
          <div>
            <h2>Listado de Clientes</h2>
            <p className='center'>Administra los Clientes</p>
          </div>
          <div className="clientComponent">

            {clients.map(client => {
              return (<Client
                key={client.id}
                client={client}
                setClient={setClient}
                deleteClient={deleteClient}
              />)
            })}
          </div>
        </>
      ) : (
        <div>
          <h2>No hay Clientes</h2>
          <p className='center'>Agrega al formulario un nuevo  Cliente</p>
        </div>)}
    </div>
  )
}
