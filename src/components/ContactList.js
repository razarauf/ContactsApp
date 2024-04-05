import React from "react";
import ContactCard from "./ContactCard"

export default function ContactList(props) {

    const renderedContactsList = props.contactsArray.map((contact) => {
        return (
            <ContactCard key={contact.email} contact={contact} removeContactHandler={props.removeContactHandler} editContactHandler={props.editContactHandler}/>
        );
    });

    return (
        <div className="ui celled list">{renderedContactsList}</div>
    )
}