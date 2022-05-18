import { createContext, useReducer } from 'react';

export const RequestContext = createContext();

const initialState = [];

function reducer(requests, { type, payload }) {
  switch (type) {
    case 'reset':
      return payload;
    default:
      throw Error(`I don't know how to ${type}`);
  }
}

export function ProvideRequest({ children }) {
  const [requests, dispatch] = useReducer(reducer, initialState);

  return (
    <RequestContext.Provider value={{ requests, dispatch }}>
      {children}
    </RequestContext.Provider>
  )
}