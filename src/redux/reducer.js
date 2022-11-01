
import { createReducer } from "@reduxjs/toolkit";
import { setFilter, deleteContact, addContact } from "./actions";

const initialContacts = 
[
    {"id": "id-1", "name": "Rosie Simpson", "phone": "459-12-56"},
    {"id": "id-5", "name": "Bob Simpson", "phone": "458-22-22"},
    {"id": "id-2", "name": "Hermione Kline","phone": "443-89-12"},
    {"id": "id-3", "name": "Eden Clements", "phone": "645-17-79"},
    {"id": "id-4", "name": "Annie Copeland","phone": "227-91-26"}
]

export const contactsReducer = createReducer (initialContacts,{
[deleteContact]: (state, action)=> {   
  const index = state.findIndex(contact => contact.id === action.payload);
  state.splice(index, 1)},
[addContact]: (state, action)=> {
  state.push(action.payload)},
})

const filtersInitialState = '';

export const filtersReducer = createReducer(filtersInitialState, {
[setFilter]:(state, action)=> state = action.payload
})

