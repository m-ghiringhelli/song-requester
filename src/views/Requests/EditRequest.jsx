import React from 'react'
import { useParams } from 'react-router-dom';
import { useRequests } from '../../hooks/useRequests';
import RequestForm from '../../components/RequestForm/RequestForm'
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

export default function EditRequest() {
  const { requests, handleUpdate } = useRequests();
  const { id } = useParams();
  // find the request that matches the page we're on
  const request = requests && requests.find(element => {
    return element.id === +id;
  });
  const history = useHistory();
  const requestUser = request?.user_id;
  const loggedInUser = useAuth().user.id;
  
  const handleSubmit = (e, submission, id) => {
    e.preventDefault();
    handleUpdate(submission, id);
    return;
  }

  if (requestUser !== loggedInUser) history.replace(`/requests/${id}`);
  
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

