import { createAction } from "@reduxjs/toolkit";

export const addContact = createAction("initialContacts/addContact");
export const deleteContact = createAction("initialContacts/addContact");
export const setFilter = createAction("setFilter");



// export const addContact = ({id, name, phone}) => {
//   return {
//     type: "initialContacts/addContact",
//     payload: {
//       id: id,
//       name: name,
//       phone: phone
//     },
//   };
// };
// export const deleteContact = id => {
//   return {
//     type: "initialContacts/deleteContact",
//     payload: id,
//   };
// };
