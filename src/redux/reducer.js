const initialContacts = 
[
    {"id": "id-1", "name": "Rosie Simpson", "phone": "459-12-56"},
    {"id": "id-5", "name": "Bob Simpson", "phone": "458-22-22"},
    {"id": "id-2", "name": "Hermione Kline","phone": "443-89-12"},
    {"id": "id-3", "name": "Eden Clements", "phone": "645-17-79"},
    {"id": "id-4", "name": "Annie Copeland","phone": "227-91-26"}
]

export const rootReducer = (state = initialContacts, action) => {
    switch (action.type) {
      case "initialContacts/addContact":
        return [...state, action.payload];
      case "initialContacts/checkUniqueContact":
        return state
    ;
      case "initialContacts/deleteContact":
        return  state.filter(item => item.id !== action.payload);
      default:
        return state;
    }
  };