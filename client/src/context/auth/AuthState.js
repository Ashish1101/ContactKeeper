import React, { useReducer } from 'react';
import AuthContext from './authContext';
import AuthReducer from './authReducer';

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthneticated: null,
    loading: true,
    error: null,
    user: null,
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        user: state.user,
        isAuthneticated: state.isAuthneticated,
        error: state.error,
        loading: state.loading,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
