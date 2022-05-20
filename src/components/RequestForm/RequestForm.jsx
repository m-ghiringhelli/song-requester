import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useRequests } from '../../hooks/useRequests';
import { getUser } from '../../services/user';

export default function RequestForm() {
  const [title, setTitle] = useState('');
  const [request, setRequest] = useState('');
  const { email } = getUser();
  const user_id = getUser().id;
  const submission = [{ title, request, user_id, email }];
  const { addRequest } = useRequests();
  const history = useHistory();

  const handleSubmit = (e, submission) => {
    e.preventDefault();
    const response = addRequest(submission);
    history.replace('/');
    return response;
  }

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e, submission)}>
        <label>
          a brief synopsis
          <input 
            type='text'
            id='title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          what kind of song do you want to hear?
          <textarea 
            type='text'
            id='request'
            value={request}
            onChange={(e) => setRequest(e.target.value)}
          />
        </label>
        <button>submit</button>
      </form>
    </div>
  )
}
