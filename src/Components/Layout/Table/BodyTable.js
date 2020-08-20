import React from "react";

function BodyTable({ contacts, setId, deleteContact }) {
  return contacts.map(({ id, username, name, email, phone },i) => (
    <tr key={i}>
      <td>{i+1}</td>
      <td>{username}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td><i className="fas fa-edit" onClick={()=>setId(id)}></i></td>
      <td><i className="fas fa-trash-alt"onClick={()=>deleteContact(id)} ></i></td>
    </tr>
  ));
}
export default BodyTable;
