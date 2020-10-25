import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import contactAction from "./contactAction";

const addContact = (state, action) => {
  return [...state, action.payload.contact];
};
const removeContact = (state, action) => {
  return state.filter((contact) => contact.id !== action.payload);
};
const items = createReducer([], {
  [contactAction.createContact]: addContact,
  [contactAction.removeContact]: removeContact,
});

const filter = createReducer("", {
  [contactAction.changeFilter]: (state, action) => action.payload,
});

export default combineReducers({
  items,
  filter,
});
