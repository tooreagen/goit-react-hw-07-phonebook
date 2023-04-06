import { ListItem, Button } from './ContactsListItem.styled';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

export function ContactsListItem(props) {
  const { id, name, phone } = props.item;
  const dispatch = useDispatch();

  const handleContactDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <ListItem>
      {`${name}: ${phone}`}{' '}
      <Button onClick={handleContactDelete}>Delete</Button>
    </ListItem>
  );
}

ContactsListItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }),
};
