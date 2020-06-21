import React, { useReducer } from 'react';
import ContextReducer from './contactReducer';
import ContactContext from './contactContext';
import { v4 } from 'uuid';

import {
  ADD_CONTACT,
  DELETE_CONTACT,
  UPDATE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  CLEAR_FILTER,
  FILTER_CONTACT,
} from '../types';

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        name: 'Ashihs',
        email: 'ashish@gmail.com',
        phone: '8266026972',
        type: 'personal',
        id: v4(),
      },
      {
        name: 'Abhishek',
        email: 'Abhishek@gmail.com',
        phone: '6397955183',
        type: 'personal',
        id: v4(),
      },
      {
        name: 'Abhinay',
        email: 'Abhinay@gmail.com',
        phone: '9760131461',
        type: 'professional',
        id: v4(),
      },
    ],
    current: null,
    filtered: null,
  };

  const [state, dispatch] = useReducer(ContextReducer, initialState);

  //ADD CONTACT
  const addContact = (contact) => {
    contact.id = v4();
    dispatch({
      type: ADD_CONTACT,
      payload: contact,
    });
  };

  //DELETE CONTACT
  const deleteContact = (id) => {
    dispatch({
      type: DELETE_CONTACT,
      payload: id,
    });
  };

  //SET_CURRENT
  const setCurrent = (contact) => {
    dispatch({
      type: SET_CURRENT,
      payload: contact,
    });
  };

  //CLEAR_CURRENT
  const clearCurrent = () => {
    dispatch({
      type: CLEAR_CURRENT,
    });
  };

  //UPDATE CONTACT
  const updateContact = (contact) => {
    dispatch({
      type: UPDATE_CONTACT,
      payload: contact,
    });
  };

  //FILTER_CONTACT
  const filterContact = (text) => {
    dispatch({
      type: FILTER_CONTACT,
      payload: text,
    });
  };

  //CLEAR_FILTER
  const clearFilter = () => {
    dispatch({
      type: CLEAR_FILTER,
    });
  };

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        updateContact,
        filterContact,
        clearFilter,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
