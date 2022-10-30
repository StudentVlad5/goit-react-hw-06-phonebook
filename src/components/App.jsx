import { useState, useEffect} from 'react';
import propTypes from 'prop-types';
import Filter from './Filter/Filter'
import ContactForm from './ContactForms/ContactForm';
import ContactList from './ContactList/ContactList';
import LocalStorage from './LocalStorage/LocalStorage';
import DynamicSort from './DynamicSort/DynamicSort'
import initialContacts from './initialContacts.json'


let CheckState = Object.assign(initialContacts, JSON.parse(localStorage.getItem('initialContacts'))).sort(DynamicSort("name"))

export default function App () {
let [contacts, setContacts] = useState(CheckState);
const [filter, setFilter] = useState('');

useEffect (()=> {
LocalStorage(contacts);
},[contacts])
  
function handleAddContact (newContact) {
  return setContacts((contacts)=>([...contacts, newContact]));
}

function handleCheckUniqueContact (name) {
  const isExistContact = !!contacts.find(contact => contact.name === name);
  isExistContact && alert('Contact is already exist');
  return !isExistContact
}

function handleRemoveContact (id) {setContacts((contacts)=>(contacts.filter(contact=>contact.id !== id)))}

function handleFilterChange (filter) {setFilter(filter)}

function getVisibleContacts () {
  return (contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase())));
} 

const visibleContacts = getVisibleContacts();
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}>
<ContactForm onAdd={handleAddContact} onCheckUnique={handleCheckUniqueContact}/>
<h2>Contacts List: {visibleContacts.length}</h2>
<h5>Find contact</h5><Filter filter={filter} onChange={handleFilterChange}/>
<div className="list_section">
<ContactList contacts={visibleContacts} onRemove={handleRemoveContact}/>
</div>
  </div>
  )
}

App.propTypes = {
  state: propTypes.arrayOf(
      propTypes.string
  )
}