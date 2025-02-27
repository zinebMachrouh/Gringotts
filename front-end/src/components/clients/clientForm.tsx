import { useState } from "react";
import { Client } from "./client";

interface ClientFormProps {
    onClose: () => void;
    onSubmit: (client: Client) => void;
}

const ClientForm: React.FC<ClientFormProps> = ({ onClose, onSubmit }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({ name, email }); 
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <h2>Add Client</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <button type="submit">Add</button>
                    <button type="button" onClick={onClose}>Cancel</button>
                </form>
            </div>
        </div>
    );
};

export default ClientForm;
