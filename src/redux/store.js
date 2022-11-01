import { configureStore } from '@reduxjs/toolkit';
import { filtersReducer, contactsReducer } from './reducer';

export const store = configureStore({
    reducer : {
        contacts: contactsReducer,
        filters: filtersReducer,
    }
});