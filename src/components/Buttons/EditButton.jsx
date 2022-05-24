import React from 'react'
import { Link } from 'react-router-dom'

export default function EditButton({ id }) {

  return (
    <button>
      <Link to={`/requests/edit/${id}`}>
        edit
      </Link> 
    </button>
  )
}
