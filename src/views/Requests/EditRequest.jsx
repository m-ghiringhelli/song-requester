import React from 'react'
import { useParams } from 'react-router-dom';
import { useRequests } from '../../hooks/useRequests';
import { useAuth } from '../../hooks/useAuth';
import RequestForm from '../../components/RequestForm/RequestForm'
import { updateRequest } from '../../services/requests';
import { useHistory } from 'react-router-dom';

export default function EditRequest() {
  const history = useHistory();
  const { requests, handleUpdate } = useRequests();
  const { id } = useParams();
  // find the request that matches the page we're on
  const request = requests && requests.find(element => {
    return element.id === +id;
  });
  const { loading } = useRequests();
  
  const handleSubmit = (e, submission, id) => {
    e.preventDefault();
    handleUpdate(submission, id);
    return;
  }

  if (!request) return null;

  return (
    <>
      <div>
        <RequestForm 
          requestToEdit={request} 
          formType={'Edit'}
          handleSubmit={handleSubmit}
          />
      </div>
    </>
  )
}

