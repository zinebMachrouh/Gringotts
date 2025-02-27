import { useEffect, useState } from "react";
import { Client } from "./client";
import ClientCard from "./clientCard";
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

    const addClient = async (client: Client) => {
        try {
            const response = await axios.post('http://localhost:9090/customers', client, {
                headers: { 'Content-Type': 'application/json' }
            });
            setClients([...clients, response.data]);
        } catch (error) {
            console.error("Error adding client:", error);
        }
    };

    const searchClients = async (search: string) => {
       if(search.trim() === "") {
           getClients();
           return;
       }else {
            if(search.includes('-')){
                try {
                    const response = await axios.get(`http://localhost:9090/customers/${search}`, {
                        headers: { 'Content-Type': 'application/json' }
                    });
                    setClients(response.data);
                } catch (error) {
                    console.error("Error fetching clients:", error);
                }
            }else{
                const searchClients = clients.filter((client) => {
                    return client.name.toLowerCase().includes(search.toLowerCase()) || client.email.toLowerCase().includes(search.toLowerCase());
                });
                setClients(searchClients);
            }
        }
    };

    

    useEffect(() => {
        getClients();
    },[]);

    return (  
        <>
            <div className="clients-header">
                <h1>Clients</h1>

                <div className="actions">
                    <div className="search">
                        <input type="text" placeholder="Search clients" onChange={(e)=> searchClients(e.target.value)}/>
                        <button type="button" title="search"><i className="fa-solid fa-magnifying-glass"></i></button>
                    </div>
                    <button type="button" title="Add client" className="addClient"><i className="fa-solid fa-plus"></i></button>
                </div>
            </div>
            <div className="clients">
                {
                    clients.length > 0 ? clients.map((client) => {
                        return <ClientCard key={client.id} client={client} />
                    }) : <p>No clients found</p>
                }
            </div>
        </>
    );
}
 
export default Clients;