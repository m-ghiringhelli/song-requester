import React from 'react'
import { useRequests } from '../../hooks/useRequests'
import RequestItem from './RequestItem';

export default function RequestList() {
  const { requests, loading } = useRequests();
  
  return (
    <div>
      {loading ? <p>loading...</p> :
      requests.map((request) => (
        <div key={request.id}>
          <RequestItem request={request}  />
        </div>
      ))}
    </div>
  )
}
