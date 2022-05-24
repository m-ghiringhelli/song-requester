import React from 'react'
import { useHistory } from 'react-router-dom';
import { useRequests } from '../../hooks/useRequests';
import RequestForm from '../../components/RequestForm/RequestForm'
import { useParams } from 'react-router-dom';

export default function CopyRequest() {
  const history = useHistory();
  const { requests, addRequest } = useRequests();
  const { id } = useParams();
  // find the request that matches the page we're on
  const request = requests && requests.find(element => {
    return element.id === +id;
  });

  const handleSubmit = (e, submission) => {
    e.preventDefault();
    addRequest(submission);
    history.replace('/');
    return;
  }

  if (!request) return null;

  return (
    <div>
      <RequestForm 
        requestToEdit={request}
        handleSubmit={handleSubmit} 
        formType={'Copy'}/>
    </div>
  )
}
