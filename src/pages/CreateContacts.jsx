import React, {useState} from 'react';
import { useOutletContext } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

function CreateContacts(){


    const navigate = useNavigate();
    const {addContact} = useOutletContext();

    const [contact, setContact] = useState({
        name: "",
        phoneNumber: ""
    });

    function submitContact(event){
        addContact(contact);
        setContact({name: "", phoneNumber:""})
        event.preventDefault();
        navigate('/phonebook-app/contact-listings');
        
    }

    function handleChange(event){
        const {name, value} = event.target;
        setContact(prevContact =>({
            ...prevContact,
            [name]: value
        }));
    }

    return (
        <div>
            <h1>Contacts</h1>
            <form className = "create-contact">
            <input 
            name = "name"
            placeholder = "Name"
            value = {contact.name}
            onChange = {handleChange}
            />

            <input
            name = "phoneNumber"
            placeholder = "Phone Number"
            onChange = {handleChange}
            value = {contact.phoneNumber}
            />
            <button onClick = {submitContact}>
                Add Contact
            </button>
            </form>
        </div>
    )
}

export default CreateContacts;