import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { signInUser, signUpUser } from '../../services/user';

export default function AuthForm() {
  const [authType, setAuthType] = useState('signup');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const auth = useAuth();
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: '/' } };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const authInfo = (authType === 'signup') ?
        await signUpUser({ email, password }) :
        await signInUser({ email, password });
      auth.setUser(authInfo.email);
      history.replace(from);
    } catch (error) {
      setErrorMessage(error.message);
    }
  }

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>
          email address:
          <input 
            id='email'
            type='email'  
            placeholder='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          password:
          <input 
            id='password'
            type='password'
            placeholder='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button>
          {authType === 'signup' ? <>sign-up</> : <>sign-in</>}
        </button>
      </form>
      {
        authType === 'signup' ?
          <>
            <p>Create an account</p>
            <p onClick={() => setAuthType('signin')}>Already have an account?</p>
          </> :
          <>
            <p>Sign-in the view song-requester</p>
            <p onClick={() => setAuthType('signup')}>Click here to create an account</p>
          </>
      }
      {errorMessage && <p>{errorMessage}</p>}
    </>
  )
}
