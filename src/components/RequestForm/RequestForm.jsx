import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { getUser } from '../../services/user';

export default function RequestForm({ 
  requestToEdit, 
  handleSubmit, 
  songRequest = {},
  formType
}) {
  const { email } = getUser();
  const user_id = getUser().id;
  const { id } = useParams();
  const { title = '', request = '' } = requestToEdit
  ? requestToEdit 
  : songRequest;
  const { formState, handleChange } = useForm({ title: title, request });
  const submission = [{ 
    title: formState.title, 
    request: formState.request,
    user_id, 
    email 
  }];

  return (
    <div>
      <p>{`${formType} a song request`}</p>
      <form onSubmit={(e) => handleSubmit(e, submission, id)}>
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
