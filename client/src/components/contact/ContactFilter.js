import React, { useContext, useState, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';
const ContactFilter = () => {
  const contactContext = useContext(ContactContext);
  const { filtered, filterContact, clearFilter } = contactContext;
  const [text, setText] = useState('');

  useEffect(() => {
    if (filtered === null) {
      setText('');
    }
    //eslint-disable-next-line
  }, []);

  const onChange = (e) => {
    setText(e.target.value);
    if (text !== '') {
      filterContact(text);
    } else {
      clearFilter();
    }
  };
  return (
    <form>
      <input
        type='text'
        value={text}
        placeholder='Filter contacats...'
        onChange={onChange}
      />
    </form>
  );
};

export default ContactFilter;
