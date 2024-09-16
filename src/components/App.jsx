import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContactsThunk } from '../redux/contactsOps';
import { selectIsLoading, selectError } from '../redux/selectors';
import ContactForm from './ContactForm/ContactForm.jsx';
import SearchBox from './SearchBox/SearchBox.jsx';
import ContactList from './ContactList/ContactList.jsx';
import './App.css';

function App() {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    useEffect(() => {
        dispatch(fetchContactsThunk());
    }, [dispatch]);

    return (
        <div>
            <h1>Phonebook</h1>
            {isLoading && <p>Loading...</p>}
            {error && <p className="error">{error}</p>}
            <ContactForm />
            <SearchBox />
            <ContactList />
        </div>
    );
}

export default App;
