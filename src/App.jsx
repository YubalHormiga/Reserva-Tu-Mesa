import { useState, useEffect } from "react"
import Header from "./components/Header"
import { Form } from "./components/Form"
import { ClientList } from "./components/ClientList"

function App() {


  const [clients, setClients] = useState(JSON.parse(localStorage.getItem('clients')) ?? [])
  const [client, setClient] = useState({})

  useEffect(() => {

    localStorage.setItem('clients', JSON.stringify(clients))
  }, [clients])


  const deleteClient = (id) => {

    const clientUpdate = clients.filter(client => client.id !== id)
    setClients(clientUpdate)
  }


  return (
    <>
      <Header />
      <div className="headerContainer container">
        <div className="appCompForm">
          <Form
            clients={clients}
            setClients={setClients}
            client={client}
            setClient={setClient}
          />
        </div>
        <div className="appCompClientList">
          <ClientList
            clients={clients}
            setClient={setClient}
            deleteClient={deleteClient}

          />
        </div>
      </div>

    </>
  )
}

export default App
