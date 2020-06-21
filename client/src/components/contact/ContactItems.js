import React, { useContext } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactItems = (props) => {
  const contextContact = useContext(ContactContext);
  const { deleteContact, setCurrent, clearCurrent } = contextContact;
  const { id, name, email, phone, type } = props.contact;

  const onDelete = () => {
    deleteContact(id);
    clearCurrent();
  };

  return (
    <div className='card bg-light'>
      <h3 className='text-primary text-left'>
        {name}{' '}
        <span
          className={
            'badge ' +
            (type === 'professional' ? 'badge-success' : 'badge-primary')
          }
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>{' '}
      </h3>
      <ul>
        {email && (
          <li>
            <i className='fas fa-envelope-open'></i>
            {email}
          </li>
        )}
        {phone && (
          <li>
            <i className='fas fa-phone'></i>
            {phone}
          </li>
        )}
      </ul>
      <p>
        <button className='btn btn-danger btn-sm' onClick={onDelete}>
          Delete
        </button>
        <button
          className='btn btn-success btn-sm'
          onClick={() => setCurrent(props.contact)}
        >
          Edit
        </button>
      </p>
    </div>
  );
};

export default ContactItems;
