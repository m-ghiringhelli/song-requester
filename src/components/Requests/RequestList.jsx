import React from 'react'
import { Link } from 'react-router-dom';
import { useRequests } from '../../hooks/useRequests'

export default function RequestList() {
  const requests = useRequests();

  return (
    <div>
      {requests.map((request) => (
        <div key={request.id}>
          <Link to={`/requests/${request.id}`}>
            <p>{request.title}</p>
          </Link>
        </div>
      ))}
    </div>
  )
}
