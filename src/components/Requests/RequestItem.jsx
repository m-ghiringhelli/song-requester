import React from 'react'
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { getUser } from '../../services/user';

export default function RequestItem({ request }) {
  const { email } = getUser();
  console.log('email', email);
  const { id, title, user_email } = request;
  const isRequestOwner = email === user_email;
  return (
    <div>
      <Link to={`/requests/${id}`}>
        {title}
      </Link>
      <span>{user_email}</span>
    </div>
  )
}
