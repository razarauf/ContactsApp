import React from "react";

class ContactCard extends React.Component {
    render () {
        const {name, email} = this.props.contact;
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
}

export default ContactCard;