import React from 'react'
import { useParams } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useRequests } from '../../hooks/useRequests'

export default function RequestDetail() {
  const { id } = useParams();
  const { requests, loading } = useRequests();
  const request = !loading && requests.find(element => {
    return element.id === +id;
  });
  console.log('test', test);
  const formatDate = (date) => {
    let newDate = new Date(date);
    newDate = String(newDate);
    newDate = newDate.slice(0, 21);
    return newDate;
  }
  const date = request && formatDate(request.created_at);

  return (
    <div>
      {
      request ? 
      <div>
        <h1>{request.title}</h1>
        <p>{request.request}</p>
        <span>{request.email} {date}</span>
      </div> :
      <p>loading...</p>
      }
    </div>
  )
}
