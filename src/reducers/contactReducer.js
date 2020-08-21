import * as actionTypes from "../actions/actionTypes";

const initialState = []
const editContact=(contacts,contact,id)=>{
  contacts[id]=contact;
  return contacts;
}
export default function contactReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_ALL_CONTACTS:
      return action.payload;
    case actionTypes.ADD_NEW_CONTACT:
      return [...state,action.contact];
    case actionTypes.EDIT_CONTACT:
      return editContact(state,action.contact,action.id);
    case actionTypes.REMOVE_CONTACT:
      return [...state.filter((contact) => contact.id !== action.id)];
    default:
      return state;
  }
}
