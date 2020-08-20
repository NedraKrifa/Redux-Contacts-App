import React from "react";

function ContactForm({ title, classForm,userName, name, email, phone, handleContactChange, addContact }) {
  return (
    <div>
      <h1>{title}</h1>
      <form>
        <div>
          <label>UserName</label>
          <input
            type="text"
            name="userName"
            value={userName}
            placeholder="username..."
            onChange={(e) => handleContactChange(e)}
          />
        </div>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={name}
            placeholder="name..."
            onChange={(e) => handleContactChange(e)}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="email..."
            onChange={(e) => handleContactChange(e)}
          />
        </div>
        <div>
          <label>Phone</label>
          <input
            type="text"
            name="phone"
            value={phone}
            placeholder="phone..."
            onChange={(e) => handleContactChange(e)}
          />
        </div>
        <button type="submit" onClick={(e) => addContact(e)}>
          <i className={classForm}></i>{title}
        </button>
      </form>
    </div>
  );
}
export default ContactForm;
