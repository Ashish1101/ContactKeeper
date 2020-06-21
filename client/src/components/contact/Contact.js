import React, { useContext } from 'react';
import ContactContext from '../../context/contact/contactContext';
import ContactItems from './ContactItems';

const Contact = () => {
  const contactContext = useContext(ContactContext);
  const { filtered, contacts } = contactContext;
  if (contacts.lenght === 0) {
    return <h3>Please Enter Contact</h3>;
  }
  return (
    <div>
      {filtered !== null
        ? filtered.map((contact) => (
            <ContactItems key={contact.id} contact={contact} />
          ))
        : contactContext.contacts.map((contact) => (
            <ContactItems contact={contact} key={contact.id} />
          ))}
    </div>
  );
};

export default Contact;
