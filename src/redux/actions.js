import { createAction } from "@reduxjs/toolkit";

export const addContact = createAction("initialContacts/addContact");
export const deleteContact = createAction("initialContacts/deleteContact");
export const setFilter = createAction("setFilter");

