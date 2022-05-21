import React from 'react'
import { useParams } from 'react-router-dom';
import { useRequests } from '../../hooks/useRequests';
import DeleteButton from '../../components/Buttons/DeleteButton';
import EditButton from '../../components/Buttons/EditButton';
import { useAuth } from '../../hooks/useAuth';
import CopyButton from '../../components/Buttons/CopyButton';

export default function RequestDetail() {
  const { requests } = useRequests();
  const { id } = useParams();
  // find the request that matches the page we're on
  const request = requests && requests.find(element => {
    return element.id === +id;
  });
  // email of logged in user:
  const { email } = useAuth().user;
  // email of request creator:
  const user_email = request?.email;
  const isRequestCreator = email === user_email;

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
        {
          isRequestCreator ? 
          <section>
            <EditButton id={id} />
            <DeleteButton id={id} />
          </section> :
          <section>
            <CopyButton />
          </section>
        }
      </div> :
      <p>loading...</p>
      }
    </div>
  )
}
