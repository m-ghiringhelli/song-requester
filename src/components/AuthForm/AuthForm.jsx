import React, { useState } from 'react'

export default function AuthForm() {
  const [authType, setAuthType] = useState('signup');

  return (
    <>
      <form>
        <label>
          email address:
          <input 
            type='email'  
            placeholder='email'
          />
        </label>
        <label>
          password:
          <input 
            type='password'
            placeholder='password'
          />
        </label>
        <button></button>
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
