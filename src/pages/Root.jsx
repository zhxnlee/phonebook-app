
import {Outlet} from 'react-router-dom';
import Navigation from '../components/Navigation';
import {useState} from 'react';
import classes from './Root.module.css';
import axrail from '../assets/axrail.png';


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
        <img src = {axrail} height = "80px" style={{borderRadius: "25px"}}/>
        <Navigation/>
        <Outlet context={{ contacts, addContact, deleteContact, startEditing, saveContact, editingContactId,setContacts }} />

        </>

    )
}
export default Root;