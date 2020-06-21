import React, { useState, useContext } from 'react';
import AlertContext from '../../context/alerts/alertContext';

const Login = () => {
  const alertContext = useContext(AlertContext);

  const { setAlert } = alertContext;
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { email, password } = user;

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (email === '' || password === '') {
      setAlert('Please enter all fields', 'danger');
    }
    console.log('Success');
  };

  return (
    <div className='form-container'>
      <h1>
        Account <span className='text-primary'>Login</span>
      </h1>
      <form className='form-group' onSubmit={onSubmit}>
        <label htmlFor='email'>Email</label>
        <input type='email' name='email' value={email} onChange={onChange} />

        <label htmlFor='password'>password</label>
        <input
          type='password'
          name='password'
          value={password}
          onChange={onChange}
        />

        <input
          type='submit'
          value='Submit'
          className='btn btn-block mt-2 btn-primary'
        />
      </form>
    </div>
  );
};

export default Login;
