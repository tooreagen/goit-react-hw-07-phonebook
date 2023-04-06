import { nanoid } from 'nanoid';
import { Form, Label, Input, Button } from './ContactsForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContactsArray } from 'redux/selectors';
import { addContact } from 'redux/operations';

export function ContactsForm() {
  const nameInputId = nanoid();
  const phoneInputId = nanoid();
  const contacts = useSelector(selectContactsArray);
  const dispatch = useDispatch();

  const handleContactAdd = evt => {
    const { name, phone } = evt.target;
    evt.preventDefault();
    if (contacts.some(item => item.name === name.value)) {
      alert(`${name.value} is already in contacts.`);
    } else {
      dispatch(addContact({ name: name.value, phone: phone.value }));
    }
    evt.target.reset();
  };

  return (
    <Form onSubmit={handleContactAdd}>
      <Label htmlFor={nameInputId}>Name</Label>
      <Input
        id={nameInputId}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <Label htmlFor={phoneInputId}>Number</Label>
      <Input
        id={phoneInputId}
        type="tel"
        name="phone"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <Button type="submit">Add contact</Button>
    </Form>
  );
}
