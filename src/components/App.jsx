import { AddContact } from './addContact/AddContact';
import ContactList from './contactList';
import Filter from './filter';
import { AppTitle, ListTitle, Container } from './App.styled';

export default function App() {
  return (
    <Container>
      <AppTitle>Phonebook</AppTitle>
      <AddContact />
      <ListTitle>Contacts</ListTitle>
      <Filter />
      <ContactList />
    </Container>
  );
}
