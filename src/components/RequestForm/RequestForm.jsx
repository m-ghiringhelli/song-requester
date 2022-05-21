import React, { useState } from 'react'
import { useForm } from '../../hooks/useForm';
import { getUser } from '../../services/user';

export default function RequestForm({ requestToEdit, handleSubmit, songRequest = {} }) {
  const { email } = getUser();
  const user_id = getUser().id;
  const { title = '', request = '' } = requestToEdit ? 
    requestToEdit :
    songRequest; 
  const { formState, handleChange } = useForm({ title, request });
  const submission = [{ 
    title: formState.title, 
    request: formState.request,
    user_id, 
    email 
  }];
  const [isEditing, setIsEditing] = useState(false);

  if (requestToEdit && !isEditing) setIsEditing(true)
  
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e, submission)}>
        <label>
          a brief synopsis
          <input 
            id='title'
            name='title'
            type='text'
            value={
              isEditing ?
              requestToEdit.title :
              formState.title
            }
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
