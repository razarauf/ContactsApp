import React from "react";

export default function ContactCard(props) {
    const {name, email} = props.contact;
    
    return (
        <div className="item">
            <div className="content">
                <div className="header">{name}</div>
                <div>{email}</div>
                <i style={{color:"red", marginTop:"7px"}} className="ui right floated trash alternate outline icon" onClick={() => props.removeContactHandler(props.contact)}></i>
                <i style={{color:"red", marginTop:"7px"}} className="ui right floated edit outline icon" onClick={() => props.editContactHandler(props.contact)}></i>
            </div>
        </div>
    )
}
