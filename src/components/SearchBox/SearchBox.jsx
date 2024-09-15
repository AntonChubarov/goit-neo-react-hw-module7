import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';
import { selectFilter } from '../../redux/selectors';
import styles from './SearchBox.module.css';

const SearchBox = () => {
    const dispatch = useDispatch();
    const filter = useSelector(selectFilter);

    const handleSearch = (event) => {
        dispatch(setFilter(event.target.value));
    };

    return (
        <div className={styles.searchContainer}>
            <label className={styles.label}>Search Contacts</label>
            <input
                type="text"
                value={filter}
                onChange={handleSearch}
                className={styles.input}
                placeholder="Type to search..."
            />
        </div>
    );
};

export default SearchBox;
