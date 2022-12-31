import './App.css';

import React from "react";

import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {

  const contactsArray = [
    {
      id: 0,
      name: "Bob Loblaw",
      email: "bob@gmail.com"
    },
    {
      id: 1,
      name: "Guy Fierri",
      email: "guy@gmail.com"
    }
  ];

  return (
    <div className='ui container'>
      <Header/>
      <AddContact/>
      <ContactList contactsArray={contactsArray}/>
    </div>
  );
}

export default App;
