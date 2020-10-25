import { v4 as uuidv4 } from "uuid";
import { createAction } from "@reduxjs/toolkit";

const createContact = createAction("contacts/create", (name, number) => ({
  payload: {
    contact: {
      name: name,
      id: uuidv4(),
      number: number,
    },
  },
}));
const removeContact = createAction("contacts/remove");

const changeFilter = createAction("contacts/changeFilter");

export default {
  createContact,
  removeContact,
  changeFilter,
};
