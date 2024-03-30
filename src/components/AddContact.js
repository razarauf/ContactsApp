import React from "react";

export default function AddContact(props) {

    const [state, setState] = React.useState({name: '', email: ''})

    function submitHandler(e) {
        e.preventDefault();

        if (state.name === "" || state.email === "") {
            alert("All fields are mandatory");
            return;
        }
        
        props.addContactHandler(state);
        setState({ name: "", email: "" })
    }

    function onChangeHandler(e){
        const {name, value} = e.target
        setState(prevState => ({
            ...prevState,
            [name]: value 
        }))
    }

    return (
        <div className="ui main">
            <h2>Add Contact</h2>
            <form className="ui form" onSubmit={submitHandler}>
                <div className="field">
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter Name"
                        value={state.name}
                        onChange={onChangeHandler}
                    />
                </div>
                <div className="field">
                    <label>Email</label>
                    <input
                        type="text"
                        name="email"
                        placeholder="Enter Email"
                        value={state.email}
                        onChange={onChangeHandler}
                    />
                </div>
                <button className="ui button blue">Add</button>
            </form>
        </div>
    )
}