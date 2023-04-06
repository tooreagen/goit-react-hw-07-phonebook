import { FilterWrap, P, Input } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/filterSlice';

export function Filter() {
  const dispatch = useDispatch();

  const handleContactFind = evt => {
    dispatch(filterContacts(evt.currentTarget.value));
  };

  return (
    <FilterWrap>
      <P>Find contacts by name</P>
      <Input type="text" onChange={handleContactFind} />
    </FilterWrap>
  );
}
