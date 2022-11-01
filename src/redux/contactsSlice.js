import { createSlice } from "@reduxjs/toolkit";

const initialContacts = 
[
    {"id": "id-1", "name": "Rosie Simpson", "phone": "459-12-56"},
    {"id": "id-5", "name": "Bob Simpson", "phone": "458-22-22"},
    {"id": "id-2", "name": "Hermione Kline","phone": "443-89-12"},
    {"id": "id-3", "name": "Eden Clements", "phone": "645-17-79"},
    {"id": "id-4", "name": "Annie Copeland","phone": "227-91-26"}
]
const contactsSlice = createSlice({
  name: "contacts",
  initialState: initialContacts,
  reducers: {
    addContact(state, action) {
        state.push(action.payload);
      },
    deleteContact(state, action) {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1)
    },
    },
});
// Экспортируем генераторы экшенов и редюсер
export const { addContact, deleteContact, toggleCompleted } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;