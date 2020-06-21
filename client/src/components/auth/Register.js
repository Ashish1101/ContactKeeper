import React, { useState, useContext } from 'react';
import AlertContext from '../../context/alerts/alertContext';
const Register = () => {
  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = user;

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  console.log(password);

  const onSubmit = (e) => {
    e.preventDefault();
    if (name === '' || email === '' || password === '' || password2 === '') {
      setAlert('Please enter all fields', 'danger');
    } else if (password !== password2) {
      setAlert('Password do not match', 'danger');
    } else {
      console.log('success');
    }
  };

  return (
    <div className='form-container'>
      <h1>
        Account <span className='text-primary'>Register</span>
      </h1>
      <form className='form-group' onSubmit={onSubmit}>
        <label htmlFor='name'>Name</label>
        <input type='text' name='name' value={name} onChange={onChange} />

        <label htmlFor='email'>Email</label>
        <input type='email' name='email' value={email} onChange={onChange} />

        <label htmlFor='password'>password</label>
        <input
          type='password'
          name='password'
          value={password}
          onChange={onChange}
          //  required
          // minLength='6'
        />

        <label htmlFor='password2'>Confirm password</label>
        <input
          type='password'
          name='password2'
          value={password2}
          onChange={onChange}
          //required
          // minLength='6'
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

export default Register;
