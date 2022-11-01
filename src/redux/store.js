import { configureStore } from '@reduxjs/toolkit';
import { filtersReducer } from '../redux/filterSlice';
import {contactsReducer} from '../redux/contactsSlice';

export const store = configureStore({
    reducer : {
        contacts: contactsReducer,
        filters: filtersReducer,
    }
});