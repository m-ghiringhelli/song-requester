import React from 'react'
import { Link } from 'react-router-dom'

export default function CopyButton({ id }) {

  return (
    <button>
      <Link to={`/requests/copy/${id}`}>
        copy
      </Link>
    </button>
  )
}
