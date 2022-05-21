import React from 'react'
import { useRequests } from '../../hooks/useRequests'

export default function DeleteButton({ id }) {
  const { handleDelete } = useRequests();
  
  return (
    <button onClick={() => handleDelete(id)}>
      delete
    </button>
  )
}
