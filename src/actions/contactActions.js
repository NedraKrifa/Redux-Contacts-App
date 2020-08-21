import * as actionTypes from "./actionTypes";

export const getAllContacts = () => (dispatch) => {
  fetch("http://jsonplaceholder.typicode.com/users")
    .then((data) => data.json())
    .then((contacts) =>
      dispatch({
        type: actionTypes.GET_ALL_CONTACTS,
        payload: contacts,
      })
    );
};

export const addNewContact = (contact) => {
  return {
    type: actionTypes.ADD_NEW_CONTACT,
    contact: contact,
  };
};

export const editTheContact = (contact, id) => {
  return {
    type: actionTypes.EDIT_CONTACT,
    contact: contact,
    id: id,
  };
};

export const deleteContact = (id) => {
  return {
    type: actionTypes.REMOVE_CONTACT,
    id: id,
  };
};
