import React from 'react';
import Contact from '../contact/Contact';
import ContactForm from '../contact/ContactForm';
import Contactfilter from '../contact/ContactFilter';
const Home = () => {
  return (
    <div className='grid-2'>
      <div>
        <ContactForm />
      </div>
      <div>
        <Contactfilter />
        <Contact />
      </div>
    </div>
  );
};

export default Home;
