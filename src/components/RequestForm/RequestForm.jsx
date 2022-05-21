import React, { useState } from 'react'
import { useForm } from '../../hooks/useForm';
import { getUser } from '../../services/user';

export default function RequestForm({ handleSubmit, songRequest = {} }) {
  // const [title, setTitle] = useState('');
  // const [request, setRequest] = useState('');
  const { email } = getUser();
  const user_id = getUser().id;
  const { title = '', request = '' } = songRequest; 
  const { formState, handleChange } = useForm({ title, request });
  const submission = [{ 
    title: formState.title, 
    request: formState.request,
    user_id, 
    email 
  }];

  console.log('submission', submission);
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e, submission)}>
        <label>
          a brief synopsis
          <input 
            id='title'
            name='title'
            type='text'
            value={formState.title}
            onChange={handleChange}
          />
        </label>
        <label>
          what kind of song do you want to hear?
          <textarea 
            id='request'
            name='request'
            type='text'
            value={formState.request}
            onChange={handleChange}
          />
        </label>
        <button>submit</button>
      </form>
    </div>
  )
}
