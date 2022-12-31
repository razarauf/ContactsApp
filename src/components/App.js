import './App.css';

import React from "react";

import Header from "./Header";
import ContactCard from "./ContactCard";
import ContactList from "./ContactList";

function App() {
  return (
    <>
      <Header/>
      <ContactCard/>
      <ContactList/>
    </>
  );
}

export default App;
