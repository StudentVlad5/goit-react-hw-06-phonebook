import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { filtersReducer } from '../redux/filterSlice';
import { contactsReducer } from '../redux/contactsSlice';
import { 
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
 } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers ({
    contacts: contactsReducer,
    filters: filtersReducer,   
})

const persistConfig = {
    key: 'root',
    storage,
  }
const persistedReducer = persistReducer(persistConfig,rootReducer)

export const store = configureStore({
    reducer : persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store);
