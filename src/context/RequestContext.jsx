import { createContext, useReducer, useState } from 'react';

export const RequestContext = createContext();

const initialState = [];

function reducer(requests, { type, payload }) {
  switch (type) {
    case 'reset':
      return payload;
    case 'add':
      return [payload, ...requests];
    default:
      throw Error(`I don't know how to ${type}`);
  }
}

export function ProvideRequest({ children }) {
  const [requests, dispatch] = useReducer(reducer, initialState);
  const [loading, setLoading] = useState(true);
  
  return (
    <RequestContext.Provider value={{ 
      requests, 
      dispatch, 
      loading, 
      setLoading 
    }}>
      {children}
    </RequestContext.Provider>
  )
}