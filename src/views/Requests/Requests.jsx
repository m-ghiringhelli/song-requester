import React from 'react'
import { useRequests } from '../../hooks/useRequests'

export default function Requests() {
  const requests = useRequests();

  return (
    <div>
      {requests.map((request) => (
        <div key={request.id}>
          <p>{request.title}</p>
        </div>
      ))}
    </div>
  )
}
