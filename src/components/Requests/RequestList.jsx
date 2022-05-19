import React from 'react'
import { Link } from 'react-router-dom';
import { useRequests } from '../../hooks/useRequests'
import RequestItem from './RequestItem';

export default function RequestList() {
  const { requests } = useRequests();
  
  return (
    <div>
      {requests.map((request) => (
        <div key={request.id}>
          <RequestItem request={request} />
        </div>
      ))}
    </div>
  )
}
