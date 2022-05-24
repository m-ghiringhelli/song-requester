import React from 'react'
import { useHistory } from 'react-router-dom';
import { useRequests } from '../../hooks/useRequests';
import RequestForm from '../../components/RequestForm/RequestForm'

export default function () {
  const history = useHistory();
  const { addRequest } = useRequests();

  const handleSubmit = (e, submission) => {
    e.preventDefault();
    addRequest(submission);
    history.replace('/');
    return;
  }

  return (
    <div>
      <RequestForm handleSubmit={handleSubmit} formType={'Add'}/>
    </div>
  )
}
