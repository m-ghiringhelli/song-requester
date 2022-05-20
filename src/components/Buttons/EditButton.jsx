import React from 'react'
import { Link } from 'react-router-dom'

export default function EditButton({ id }) {
  console.log('id', id);
  return (
    <button>
      <Link to={`/requests/edit/${id}`}>
        edit
      </Link> 
    </button>
  )
}
