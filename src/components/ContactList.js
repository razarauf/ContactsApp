import React from "react";

const ContactList = (props) => {

    console.log(props);

    const renderedContactsList = props.contactsArray.map((contact) => {
        return (
            <div className="item">
                <div className="content">
                    <div className="header">{contact.name}</div>
                    <div>{contact.email}</div>
                    <i className="ui right floated trash alternate outline icon"></i>
                </div>
            </div>
        );
    });

    return (
        <div className="ui celled list">{renderedContactsList}</div>
    )
}

export default ContactList;