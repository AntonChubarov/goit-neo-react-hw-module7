import { useDispatch, useSelector } from 'react-redux';
import { deleteContactThunk } from '../../redux/contactsOps';
import { selectFilteredContacts } from '../../redux/selectors';
import Contact from './Contact.jsx';
import styles from './ContactList.module.css';

const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectFilteredContacts);

    const handleDelete = (id) => {
        dispatch(deleteContactThunk(id));
    };

    return (
        <div className={styles.container}>
            {contacts.length === 0 ? (
                <p className={styles.emptyMessage}>Nothing is saved yet</p>
            ) : (
                <ul className={styles.list}>
                    {contacts.map((contact) => (
                        <Contact key={contact.id} contact={contact} deleteContact={handleDelete} />
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ContactList;
