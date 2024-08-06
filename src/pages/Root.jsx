
import {Outlet} from 'react-router-dom';
import Navigation from '../components/Navigation';
import {useState} from 'react';
import classes from './Root.module.css';
import axrail from '../assets/axrail.png';
import styles from "./Root.module.css"

function Root(){

    const [contacts, setContacts] = useState([]);
    const [editingContactId, setEditingContactId] = useState(null);
    

    function addContact(contact) {
        setContacts(prevContacts => [...prevContacts, { ...contact, id: Date.now() }]);
    }

    // Function to delete a contact locally
    function deleteContact(id) {
        setContacts(prevContacts => prevContacts.filter(contact => contact.id !== id));
    }

    // Function to start editing a contact
    function startEditing(id) {
        setEditingContactId(id);
    }

    // Function to save an edited contact locally
    function saveContact(id, updatedContact) {
        setContacts(prevContacts =>
            prevContacts.map(contact =>
                contact.id === id ? { ...updatedContact, id: id } : contact
            )
        );
        setEditingContactId(null);
    }
    
    

    return(
        <>
        <div className = {styles.phonebook}>
            <h1>ZhenXuan's Phonebook!</h1>
            <Navigation/>
            <Outlet context={{ contacts, addContact, deleteContact, startEditing, saveContact, editingContactId,setContacts }} />
        </div>
        </>

    )
}
export default Root;