import axios from 'axios';

const AXIOS = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

function getContacts() {
  return AXIOS.get('/contacts').then(res => res.data);
}
function addContacts(contact) {
  return AXIOS.post('/contacts', contact).then(res => ({
    ...contact,
    id: res.data.name,
  }));
}
function removeContacts(id) {
  return AXIOS.delete(`/contacts/${id}`).then(() => id);
}

export { getContacts, addContacts, removeContacts };
