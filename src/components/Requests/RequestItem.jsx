import React from 'react'
import { Link } from 'react-router-dom';

export default function RequestItem({ request }) {
  const { id, title } = request;
  const user_email = request.email;

  return (
    <div>
      <Link to={`/requests/${id}`}>
        {title}
      </Link>
      <p>{user_email}</p>
    </div>
  )
}
