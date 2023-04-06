import { ContactsForm } from './ContactsForm/ContactsForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { Layout } from './Layout';
import { GlobalStyle } from './GlobalStyle';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { selectFetchError, selectIsLoadingState } from 'redux/selectors';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Loading } from './Loading/Loading';

export function App() {
  const dispatch = useDispatch();
  const error = useSelector(selectFetchError);
  const isLoading = useSelector(selectIsLoadingState);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    toast.error(error);
  }, [error]);

  return (
    <Layout>
      <h1>Phonebook</h1>
      <ContactsForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading ? <Loading /> : <ContactsList />}
      <GlobalStyle />
      <ToastContainer />
    </Layout>
  );
}