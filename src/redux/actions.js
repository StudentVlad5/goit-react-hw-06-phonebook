export const addContact = ({id, name, phone}) => {
  return {
    type: "initialContacts/addContact",
    payload: {
      id: id,
      name: name,
      phone: phone
    },
  };
};
export const deleteContact = id => {
  return {
    type: "initialContacts/deleteContact",
    payload: id,
  };
};
