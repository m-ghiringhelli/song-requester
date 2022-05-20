import React from 'react'
import { useParams } from 'react-router-dom';
import { useRequests } from '../../hooks/useRequests'

export default function RequestDetail() {
  const { id } = useParams();
  const { requests, loading } = useRequests();

  const request = !loading && requests.find(element => {
    return element.id === +id;
  });

  console.log('request', request);
  // {
  //   "id": 1,
  //   "created_at": "2022-05-18T22:25:27+00:00",
  //   "user_id": "33ea754d-a930-425c-a519-3b06c5487c1f",
  //   "title": "led zeppelin but ska",
  //   "request": "it'd be cool if there was a song that was like stairway to heaven but there was a horn section and a skankin' bassline",
  //   "email": "marcus@test.com"
  // }

  return (
    <div>
      {
      request ? 
      <div>
        {console.log('request', request)}
        <h1>{request.title}</h1>
        <p>{request.request}</p>
        <span>{request.email} {request.created_at}</span>
      </div> :
      <p>loading...</p>
      }
    </div>
  )
}
