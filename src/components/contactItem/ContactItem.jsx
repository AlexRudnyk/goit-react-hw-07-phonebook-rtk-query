import { ListItem, DeleteBtn, EditBtn } from './ContactItem.styled';
import { useDeleteContactMutation } from 'redux/contactsSlice';
import { useState } from 'react';
import { EditContact } from 'components/editContact/EditContact';

export const ContactItem = ({ contact }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  return (
    <>
      <ListItem>
        {contact.name}: {contact.number}
        <div>
          <EditBtn type="button" onClick={() => setIsModalOpen(true)}>
            Edit
          </EditBtn>
          <DeleteBtn
            type="button"
            onClick={() => deleteContact(contact.id)}
            disabled={isLoading}
          >
            Delete
          </DeleteBtn>
        </div>
        {isModalOpen && (
          <EditContact id={contact.id} closeModal={setIsModalOpen} />
        )}
      </ListItem>
    </>
  );
};
