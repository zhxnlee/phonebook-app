import { useState } from "react";
import classes from "./Contact.module.css";

function Contact(props) {
    const [editedContact, setEditedContact] = useState({
        name: props.name,
        phoneNumber: props.phoneNumber
    });
    console.log('Contact ID:', props.id);

    function handleChange(event) {
        const { name, value } = event.target;
        setEditedContact(prevContact => ({
            ...prevContact,
            [name]: value
        }));
    }

    return props.isEditing ? (
        <tr>
            <td>
                <input
                    type="text"
                    name="name"
                    value={editedContact.name}
                    onChange={handleChange}
                    placeholder="Name"
                />
            </td>
            <td>
                <input
                    type="text"
                    name="phoneNumber"
                    value={editedContact.phoneNumber}
                    onChange={handleChange}
                    placeholder="Phone Number"
                />
            </td>
            <td>
                <button
                    onClick={() => props.onSave(props.id, editedContact)}
                    className={`${classes.button} ${classes.saveButton}`}
                >
                    SAVE
                </button>
            </td>
        </tr>
    ) : (
        <tr>
            <td>{props.name}</td>
            <td>{props.phoneNumber}</td>
            <td>
                <button onClick={() => props.onEdit(props.id)} className={classes.button}>EDIT</button>
                <button onClick={() => props.onDelete(props.id)} className={`${classes.button} ${classes.deleteButton}`}>DELETE</button>
            </td>
        </tr>
    );
}

export default Contact;
