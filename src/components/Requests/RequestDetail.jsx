import React from 'react'
import { useParams } from 'react-router-dom';
import { useRequests } from '../../hooks/useRequests'
import DeleteButton from '../Buttons/DeleteButton';
import EditButton from '../Buttons/EditButton';

export default function RequestDetail() {
  const { requests, loading } = useRequests();
  const { id } = useParams();
  // find the request that matches the page we're on
  const request = !loading && requests.find(element => {
    return element.id === +id;
  });
  // make the date readable
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
        <section>
          <EditButton id={id} />
          <DeleteButton id={id} />
        </section>
      </div> :
      <p>loading...</p>
      }
    </div>
  )
}
