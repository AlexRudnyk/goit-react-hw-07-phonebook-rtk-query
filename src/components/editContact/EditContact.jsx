import {
  useFetchContactByIdQuery,
  useEditContactMutation,
} from 'redux/contactsSlice';
import { Modal, Overlay, TitleWrapper } from './EditContact.styled';
import { ContactForm } from 'components/contactForm/ContactForm';

export const EditContact = ({ closeModal, id }) => {
  const { data: contact } = useFetchContactByIdQuery(id);
  const [editContact] = useEditContactMutation();
  const handleCloseModal = () => closeModal(false);

  const handleEditContact = async fields => {
    try {
      await editContact({ id: id, ...fields });
      handleCloseModal();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Overlay>
      <Modal>
        <TitleWrapper>
          <p>Update contact</p>
          <button type="button" onClick={handleCloseModal}>
            Close
          </button>
        </TitleWrapper>
        {contact && (
          <ContactForm
            onSubmit={handleEditContact}
            btnText={'Update'}
            initialValues={{ name: contact.name, number: contact.number }}
          />
        )}
      </Modal>
    </Overlay>
  );
};
