import React from 'react'
import { useRequests } from '../../hooks/useRequests'

export default function Requests() {
  const requests = useRequests();

  console.log(requests);

  return (
    <div>Requests</div>
  )
}
