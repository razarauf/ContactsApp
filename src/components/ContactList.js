import React from "react";
import ContactCard from "./ContactCard"

const ContactList = (props) => {

    const renderedContactsList = props.contactsArray.map((contact) => {
        return (
            <ContactCard contact={contact}/>
        );
    });

    return (
        <div className="ui celled list">{renderedContactsList}</div>
    )
}

export default ContactList;