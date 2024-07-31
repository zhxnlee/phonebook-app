import React, {useEffect} from 'react';
import { useOutletContext } from 'react-router-dom';
import Contact from '../components/Contact';
import styles from './ContactListings.module.css';


function ContactListings() {
    const { contacts, deleteContact, startEditing, saveContact, editingContactId, setContacts} = useOutletContext();



    return (
        <>
            <h1>Contact Listings</h1>
            <table className={styles.contactsTable}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone Number</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.length < 1 ? (
                        <tr>
                            <th colSpan="3" className={styles.contactEmpty}>
                                Contact list is empty!
                            </th>
                        </tr>
                    ) : (
                        contacts.map(contactItem => (
                            <Contact
                                key={contactItem.id}
                                id={contactItem.id}
                                name={contactItem.name}
                                phoneNumber={contactItem.phoneNumber}
                                onDelete={deleteContact}
                                onEdit={startEditing}
                                onSave={saveContact}
                                isEditing={editingContactId === contactItem.id}
                            />
                        ))
                        
                    )}
                </tbody>
            </table>
        </>
    );
}

export default ContactListings;
