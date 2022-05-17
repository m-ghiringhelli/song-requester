import React, { useState } from 'react'
import { signInUser, signUpUser } from '../../services/user';

export default function AuthForm() {
  const [authType, setAuthType] = useState('signup');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const authInfo = (authType === 'signup') ?
      await signUpUser({ email, password }) :
      await signInUser({ email, password });
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
    </>
  )
}
