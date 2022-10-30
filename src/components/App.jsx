import { useState } from 'react';
import propTypes from 'prop-types';
import Filter from './Filter/Filter';
import ContactForm from './ContactForms/ContactForm';
import ContactList from './ContactList/ContactList';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteContact } from "../redux/actions";

export default function App () {

const contacts = useSelector(state => state);
const [filter, setFilter] = useState('');
const dispatch = useDispatch();

function handleRemoveContact (id) {
  dispatch(deleteContact(id))
}

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
<ContactForm/>
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