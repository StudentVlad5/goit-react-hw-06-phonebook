import { useSelector, useDispatch } from "react-redux";
import { deleteContact} from "../../redux/contactsSlice";
import Filter from '../Filter/Filter';
import propTypes from 'prop-types';


const ContactListItem = ({id, name, phone, onRemove}) => {
    return (
        <li>
            {name}: {phone} <button onClick={()=>onRemove(id)}>Delete</button>
        </li>
    )
}

const ContactList = ( ) => {
    const contacts = useSelector(state => state.contacts);
    const filter = useSelector(state => state.filters);
    const dispatch = useDispatch();
    function handleRemoveContact (id) {
        dispatch(deleteContact(id))
      }
    function getVisibleContacts () {
        return (contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase())));
      } 
    const visibleContacts = getVisibleContacts();
    if(contacts.length === 0){return null}
    return (
    <>
        <h2>Contacts List: {visibleContacts.length}</h2>
        <h5>Find contact</h5><Filter/>
        <ul>
            {visibleContacts.map(contact => <ContactListItem {...contact} onRemove={handleRemoveContact} key={contact.id}/>)}
        </ul>
    </>
    )
}

export default ContactList

ContactListItem.propTypes = {
    id : propTypes.string.isRequired,
    name : propTypes.string.isRequired, 
    phone : propTypes.string.isRequired, 
    onRemove: propTypes.func
}