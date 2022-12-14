import { useFetchContactsQuery } from 'redux/contactsSlice';
import { ContactItem } from 'components/contactItem/ContactItem';

const ContactList = () => {
  const { data: contacts, error, isLoading } = useFetchContactsQuery();

  return (
    <>
      {error && <p>Something went wrong</p>}
      {isLoading ? (
        <b>Downloading contacts</b>
      ) : (
        <ul>
          {contacts.map(contact => (
            <ContactItem contact={contact} key={contact.id} />
          ))}
        </ul>
      )}
    </>
  );
};
export default ContactList;
