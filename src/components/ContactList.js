import React from "react";
import ContactCard from "./ContactCard"

export default function ContactList(props) {

    const renderedContactsList = props.contactsArray.map((contact) => {
        return (
            <ContactCard contact={contact}/>
        );
    });

    return (
        <div className="ui celled list">{renderedContactsList}</div>
    )
}