import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {deleteContact} from "../../../actions/contactActions"

function BodyTable({ setId }) {
  const contacts = useSelector((state) => state.contacts);
  const dispatch = useDispatch();

  return contacts.map(({ id, username, name, email, phone },i) => (
    <tr key={i}>
      <td>{i+1}</td>
      <td>{username}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td><i className="fas fa-edit" onClick={()=>setId(id,i)}></i></td>
      <td><i className="fas fa-trash-alt"onClick={()=>dispatch(deleteContact(id))} ></i></td>
    </tr>
  ));
}
export default BodyTable;
