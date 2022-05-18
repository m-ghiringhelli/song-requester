import React from 'react'
import { Link } from 'react-router-dom';

export default function RequestItem({ request }) {
  const { id, title } = request;
  console.log(request);
  return (
    <div>
      <Link to={`/requests/${id}`}>
        {title}
      </Link>
    </div>
  )
}
