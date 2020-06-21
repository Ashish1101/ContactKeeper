import React, { useState, useContext, useEffect } from 'react';
import ConatctContext from '../../context/contact/contactContext';
const ContactForm = () => {
  const contactContext = useContext(ConatctContext);
  const { addContact, current, clearCurrent, updateContact } = contactContext;
  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'personal',
  });

  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact({
        name: '',
        email: '',
        phone: '',
        type: 'personal',
      });
    }
  }, [contactContext, current]);

  const onChange = (e) =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (current === null) {
      addContact(contact);
    } else {
      updateContact(contact);
    }

    setContact({
      name: '',
      email: '',
      phone: '',
      type: 'personal',
    });
  };

  const clearAll = () => {
    clearCurrent();
  };

  const { name, email, phone, type } = contact;
  return (
    <form onSubmit={onSubmit}>
      <h2 className='text-primary'>
        {current === null ? 'Add Contact' : 'Edit Contact'}
      </h2>
      <input
        type='text'
        name='name'
        value={name}
        placeholder='Name'
        onChange={onChange}
      />
      <input
        type='email'
        name='email'
        placeholder='Email'
        value={email}
        onChange={onChange}
      />
      <input
        type='text'
        name='phone'
        placeholder='phone'
        value={phone}
        onChange={onChange}
      />
      <h5 className='text-Primary'>Contact Type</h5>
      <input
        type='radio'
        name='type'
        value='personal'
        checked={type === 'personal'}
        onChange={onChange}
      />{' '}
      personal{' '}
      <input
        type='radio'
        name='type'
        value='professional'
        checked={type === 'professional'}
        onChange={onChange}
      />{' '}
      professional
      <div>
        <input
          type='submit'
          value={current === null ? 'Add Contact' : 'Update Contact'}
          className='btn btn-primary btn-block'
        />
      </div>
      {current && (
        <div>
          <input
            type='button'
            value='Clear'
            className='btn btn-danger btn-block'
            onClick={clearAll}
          />
        </div>
      )}
    </form>
  );
};

export default ContactForm;
