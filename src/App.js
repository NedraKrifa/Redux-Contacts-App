import React, { useState } from "react";
import Contacts from "./Components/Contacts/Contacts";
import Header from "./Components/Layout/Header/Header";
import ContactForm from "./Components/Contacts/ContactForm";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { addNewContact, editTheContact } from "./actions/contactActions";

function App() {
  const contacts = useSelector((state) => state.contacts);
  const dispatch = useDispatch();

  const [userName, setUserName] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [userNameEdit, setUserNameEdit] = useState("");
  const [nameEdit, setNameEdit] = useState("");
  const [emailEdit, setEmailEdit] = useState("");
  const [phoneEdit, setPhoneEdit] = useState("");
  const [idEdit, setIdEdit] = useState("");
  const [index,setIndex] = useState("");
  const [showEditForm, setShowEditForm] = useState(false);
  const [showForm, setShowForm] = useState(false);
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
      id: contacts[contacts.length-1].id + 1,
      username: userName,
      name: name,
      email: email,
      phone: phone,
    };
    dispatch(addNewContact(contact));
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
  const setId = (id,i) => {
    setShowEditForm(true);
    setIdEdit(id);
    setIndex(i);
    setNameEdit(contacts[i].name);
    setUserNameEdit(contacts[i].username);
    setEmailEdit(contacts[i].email);
    setPhoneEdit(contacts[i].phone);
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
    dispatch(editTheContact(contact,index))
    resetInputEditField();
    setShowEditForm(false);
  };

  return (
    <div>
      <Header />
      <div className="contact-form">
        <div onClick={() => setShowForm(!showForm)}>
          {showForm ? (
            <i className="fas fa-angle-double-up"></i>
          ) : (
            <i className="fas fa-angle-double-down"></i>
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
      <Contacts setId={setId} />
    </div>
  );
}
export default App;
