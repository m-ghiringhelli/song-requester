import React from 'react'
import { useParams } from 'react-router-dom';
import { useRequests } from '../../hooks/useRequests';
import { useAuth } from '../../hooks/useAuth';
import RequestForm from '../../components/RequestForm/RequestForm'

export default function EditRequest() {
  const { requests } = useRequests();
  const { id } = useParams();
  // find the request that matches the page we're on
  const request = requests && requests.find(element => {
    return element.id === +id;
  });

  return (
    <div>
      <RequestForm requestToEdit={request} />
    </div>
  )
}
