import { useEffect, useState } from "react";
import { Client } from "./client";
import ClientCard from "./clientCard";
import axios from "axios";
import ClientForm from "./clientForm";

const Clients = () => {
    const [clients, setClients] = useState<Client[]>([]);
    const [showForm, setShowForm] = useState<boolean>(false);

    const getClients = async () => {
        try {
            const response = await axios.get('http://localhost:9090/customers', {
                headers: { 'Content-Type': 'application/json' }
            });
            setClients(response.data);
        } catch (error) {
            console.error("Error fetching clients:", error);
        }
    };

    const addClient = async (client: Client) => {
        try {
            const response = await axios.post('http://localhost:9090/customers', client, {
                headers: { 'Content-Type': 'application/json' }
            });
            setClients([...clients, response.data]);
            setShowForm(false); 
        } catch (error) {
            console.error("Error adding client:", error);
        }
    };

    useEffect(() => {
        getClients();
    }, []);

    return (  
        <>
            <div className="clients-header">
                <h1>Clients</h1>
                <div className="actions">
                    <div className="search">
                        <input type="text" placeholder="Search clients" onChange={(e) => searchClients(e.target.value)} />
                        <button type="button" title="search"><i className="fa-solid fa-magnifying-glass"></i></button>
                    </div>
                    <button type="button" title="Add client" className="addClient" onClick={() => setShowForm(true)}>
                        <i className="fa-solid fa-plus"></i>
                    </button>
                </div>
            </div>
            <div className="clients">
                {clients.length > 0 ? clients.map((client) => (
                    <ClientCard key={client.id} client={client} />
                )) : <p>No clients found</p>}
            </div>

            {showForm && <ClientForm onClose={() => setShowForm(false)} onSubmit={addClient} />}
        </>
    );
}

export default Clients;
