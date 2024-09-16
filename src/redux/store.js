import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filtersReducer } from './filterSlice';

const rootReducer = combineReducers({
    contacts: contactsReducer,
    filters: filtersReducer,
});

export const store = configureStore({
    reducer: rootReducer,
});
