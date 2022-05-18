import React from 'react'
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { getUser } from '../../services/user';

export default function RequestItem({ request }) {
  const { email } = getUser();
  console.log('email', email);
  const { id, title, user_email } = request;
  const isRequestCreator = email === user_email;
  return (
    <div>
      <Link to={`/requests/${id}`}>
        {title}
      </Link>
      <p>{user_email}</p>
      {isRequestCreator && (
        <button>
          <Link to={`/requests/edit/${id}`}>
            edit
          </Link>
        </button>
      )}
    </div>
  )
}
