import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useRequests } from '../../hooks/useRequests'
import RequestItem from './RequestItem';

export default function RequestList() {
  const { requests, loading } = useRequests();
  console.log('requests', requests);
  
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
