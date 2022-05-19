import React from 'react'
import RequestForm from '../../components/RequestForm/RequestForm'

export default function () {
  const logSubmit = (request) => {
    console.log('submitted', request);
  }

  return (
    <div>
      <RequestForm logSubmit={logSubmit} />
    </div>
  )
}
