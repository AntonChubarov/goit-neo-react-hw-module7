import axios from 'axios';

axios.defaults.baseURL = 'https://66e6cd0f17055714e58a8f81.mockapi.io';

const contactsResourcePath = '/contacts/contacts'

export const fetchContacts = async () => {
    const { data } = await axios.get(contactsResourcePath);
    return data;
};

export const addContact = async ({ name, number }) => {
    const { data } = await axios.post(contactsResourcePath, { name, number });
    return data;
};

export const deleteContact = async (id) => {
    await axios.delete(`${contactsResourcePath}/${id}`);
    return id;
};
