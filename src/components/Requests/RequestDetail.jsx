import React from 'react'
import { useParams } from 'react-router-dom';
import { useRequests } from '../../hooks/useRequests'

export default function RequestDetail() {
  const { id } = useParams();
  const { requests, loading } = useRequests();

  const request = !loading && requests.find(element => {
    return element.id === +id;
  });

  return (
    <div>

    </div>
  )
}
