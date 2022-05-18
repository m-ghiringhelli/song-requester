import { createContext, useReducer } from 'react';

export const RequestContext = createContext();

const initialState = [];

function reducer(requests, { type, payload }) {
  switch (type) {
    
  }
}

export function RequestProvider({ children }) {
  const [requests, dispatch] = useReducer(reducer, initialState);

  return (
    <RequestContext.Provider>
      {children}
    </RequestContext.Provider>
  )
}