import React from "react";

export default function ContactCard(props) {
    const {name, email} = props.contact;
    
    return (
        <div className="item">
            <div className="content">
                <div className="header">{name}</div>
                <div>{email}</div>
                <i style={{color:"red", marginTop:"7px"}} className="ui right floated trash alternate outline icon"></i>
            </div>
        </div>
    )
}
