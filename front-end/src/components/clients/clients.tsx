import { useEffect, useState } from "react";
import { Client } from "./client";
import axios from "axios";

const Clients = () => {
    const [clients,setClients] = useState<Client[]>([]);

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
    

    useEffect(() => {
        getClients();
    },[]);

    return (  
        <>
            <h1>Clients</h1>
            <ul>
                {clients.map((client) => (
                    <li key={client.id}>{client.name} - {client.email}</li>
                ))}
            </ul>
        </>
    );
}
 
export default Clients;