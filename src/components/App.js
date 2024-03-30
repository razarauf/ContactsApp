import './App.css';

import React, {useState, useEffect} from "react";

import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

export default function App() {

  const LOCAL_STORAGE_KEY = "contacts";

  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    setContacts([...contacts, contact]);
  };

  const removeContactHandler = (contact) => {
    setContacts(prevContacts => prevContacts.filter(i => i !== contact));
  };

  useEffect(() => {
    const retrievedContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retrievedContacts) {
      setContacts(retrievedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className='ui container'>
      <Header/>
      <AddContact addContactHandler={addContactHandler}/>
      <ContactList contactsArray={contacts} removeContactHandler={removeContactHandler}/>
    </div>
  );
}