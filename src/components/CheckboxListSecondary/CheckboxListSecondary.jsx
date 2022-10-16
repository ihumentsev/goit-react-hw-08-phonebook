import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { useSelector, useDispatch } from 'react-redux';
import { removeContacts } from 'redux/operations';
import Button from '@mui/material/Button';
import ChildModal from '../ChildModal/ChildModal';
import css from '../CheckboxListSecondary/CheckboxListSecondary.module.css';

export default function CheckboxListSecondary({ arr, page }) {
  // const contacts = useSelector(state => state.contacts.contacts);
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);

  const getVisibleContacts = () => {
    return arr[page].filter(contacts =>
      contacts.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <div className={css.list}>
      <List
        className={css.contacts_list}
        dense
        sx={{
          width: '100%',
          maxWidth: '900px',
          bgcolor: 'background.paper',
          fontSize: '30px',
        }}
      >
        {visibleContacts.map(contact => {
          return (
            <ListItem key={contact.id}>
              <ListItemButton>
                <ListItemAvatar>
                  <Avatar />
                </ListItemAvatar>
                <ListItemText className={css.contacts_text}>
                  {contact.name}
                </ListItemText>
                <ChildModal contactItem={contact} />
                <Button
                  onClick={() => dispatch(removeContacts(contact.id))}
                  variant="outlined"
                  color="error"
                >
                  DELETE
                </Button>
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
}
