import React, { useState } from 'react'

export default function RequestForm() {
  const [title, setTitle] = useState('');
  const [request, setRequest] = useState('');
  return (
    <div>
      <form>
        <label>
          a brief synopsis
          <input 
            type='text'
            id='title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          what kind of song do you want to hear?
          <textarea 
            type='text'
            id='request'
            value={request}
            onChange={(e) => setRequest(e.target.value)}
          />
        </label>
        <button>submit</button>
      </form>
    </div>
  )
}
