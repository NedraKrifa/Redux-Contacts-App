import React, { useState, useEffect } from "react";
import Contacts from "./Components/Contacts/Contacts";
import Header from "./Components/Layout/Header/Header";
import ContactForm from "./Components/Contacts/ContactForm";
import "./App.css";

function App() {
  const [contacts, setContacts] = useState([]);
  const [userName, setUserName] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [userNameEdit, setUserNameEdit] = useState("");
  const [nameEdit, setNameEdit] = useState("");
  const [emailEdit, setEmailEdit] = useState("");
  const [phoneEdit, setPhoneEdit] = useState("");
  const [idEdit, setIdEdit] = useState("");
  const [showEditForm, setShowEditForm] = useState(false);
  const [showForm, setShowForm] = useState(false);
  useEffect(() => {
    fetch("http://jsonplaceholder.typicode.com/users")
      .then((data) => data.json())
      .then((res) => setContacts(res))
      .catch(console.log);
  }, []);
  const resetInputField = () => {
    setUserName("");
    setName("");
    setEmail("");
    setPhone("");
  };
  const resetInputEditField = () => {
    setIdEdit("");
    setUserNameEdit("");
    setNameEdit("");
    setEmailEdit("");
    setPhoneEdit("");
  };
  const handleContactChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "userName":
        setUserName(value);
        break;
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "phone":
        setPhone(value);
        break;
    }
  };
  const addContact = (e) => {
    e.preventDefault();
    const contact = {
      id: contacts.length + 1,
      username: userName,
      name: name,
      email: email,
      phone: phone,
    };
    setContacts([...contacts, contact]);
    resetInputField();
  };
  const handleContactEditChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "userName":
        setUserNameEdit(value);
        break;
      case "name":
        setNameEdit(value);
        break;
      case "email":
        setEmailEdit(value);
        break;
      case "phone":
        setPhoneEdit(value);
        break;
    }
  };
  const setId = (id) => {
    setShowEditForm(true);
    setIdEdit(id);
    setNameEdit(contacts[id - 1].name);
    setUserNameEdit(contacts[id - 1].username);
    setEmailEdit(contacts[id - 1].email);
    setPhoneEdit(contacts[id - 1].phone);
  };
  const editContact = (e) => {
    e.preventDefault();
    const contact = {
      id: idEdit,
      username: userNameEdit,
      name: nameEdit,
      email: emailEdit,
      phone: phoneEdit,
    };
    contacts[idEdit - 1] = contact;
    setContacts([...contacts]);
    resetInputEditField();
    setShowEditForm(false);
  };
  const deleteContact = (id) => {
    setContacts([...contacts.filter((contact) => contact.id !== id)]);
  };
  return (
    <div>
      <Header />
      <div className="contact-form">
        <div onClick={() => setShowForm(!showForm)}>
          {showForm ? (
            <i class="fas fa-angle-double-up"></i>
          ) : (
            <i class="fas fa-angle-double-down"></i>
          )}
        </div>
        {showForm ? (
          <ContactForm
            title="Add Contact"
            classForm="fas fa-user-plus"
            userName={userName}
            name={name}
            email={email}
            phone={phone}
            handleContactChange={handleContactChange}
            addContact={addContact}
          />
        ) : (
          ""
        )}
      </div>
      {showEditForm ? (
        <ContactForm
          title="Edit Contact"
          classForm="fas fa-edit"
          userName={userNameEdit}
          name={nameEdit}
          email={emailEdit}
          phone={phoneEdit}
          handleContactChange={handleContactEditChange}
          addContact={editContact}
        />
      ) : (
        ""
      )}
      <Contacts
        contacts={contacts}
        setId={setId}
        deleteContact={deleteContact}
      />
    </div>
  );
}
export default App;
