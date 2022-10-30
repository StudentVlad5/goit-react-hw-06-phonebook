import {useState} from "react";
import propTypes from 'prop-types';
import { nanoid } from 'nanoid';

function  ContactForm  ({onAdd, onCheckUnique}) {
    const [initial_state, setInitial_state] = useState({
        name: "",
        phone: "",
    });

function handleChangeForm  (event) {
    const {name, value} = event.target;
    setInitial_state(initial_state=>({...initial_state, [name]:value}));
}

function handleFormSubmit  (event)  {
    event.preventDefault()
    const id = nanoid();
    // const {onAdd} = props;
    const isValidateForm = validateForm();
    if(isValidateForm){
    let newContact = onAdd({id:id,name: initial_state.name, phone: initial_state.phone});
    resetForm ();
    return newContact}
}

function validateForm () {
        // const { onCheckUnique } = this.props;
    if (!initial_state.name || !initial_state.phone){
        alert('Some field is empty')
        return false}

    return onCheckUnique(initial_state.name)
    }

function resetForm () {
    setInitial_state(initial_state=>({
        name: '',
        phone: '',
    }))
}



        return(
        <form onSubmit={handleFormSubmit}>
            <label>Name
                <input  
                type="text"   
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                value={initial_state.name}
                onChange = {handleChangeForm}
                required/>
            </label>
            <label>Phone
                <input 
                type="tel"
                name="phone"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                value={initial_state.phone}
                onChange = {handleChangeForm}
                required/>
            </label>
            <button type='submit'>Add contact</button>
        </form>)
        
    }



export default ContactForm

ContactForm.propTypes = {
    state: propTypes.arrayOf(
        propTypes.string
    )
}