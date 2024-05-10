import { useState, useEffect } from "react";
import "./App.css";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactsState from "./ContactsState.json";

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem("add-contact");

    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
    }

    return ContactsState;
  });

  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    window.localStorage.setItem("add-contact", JSON.stringify(contacts));
  }, [contacts]);

  const handleChangeInpyt = (newValue) => {
    setInputValue(newValue);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  const addContact = (newContact) => {
    setContacts((prevContact) => {
      return [...prevContact, newContact];
    });
  };

  const deliteContact = (contactId) => {
    setContacts((prevContact) => {
      return prevContact.filter((contact) => contact.id !== contactId);
    });
  };

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox
        inputValue={inputValue}
        handleChangeInpyt={handleChangeInpyt}
      />
      <ContactList contacts={filteredContacts} onDelite={deliteContact} />
    </>
  );
}

export default App;
