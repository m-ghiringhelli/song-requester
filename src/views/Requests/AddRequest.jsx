import React from 'react'
import { useHistory } from 'react-router-dom';

import RequestForm from '../../components/RequestForm/RequestForm'
import { useRequests } from '../../hooks/useRequests';

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
      <RequestForm handleSubmit={handleSubmit} />
    </div>
  )
}
