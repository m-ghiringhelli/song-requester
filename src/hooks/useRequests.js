import { useContext, useEffect } from 'react';
import { RequestContext } from '../context/RequestContext';
import { getRequests } from '../services/requests';

export function useRequests() {
  const context = useContext(RequestContext);
  
  if (context === undefined) {
    throw new Error('you did not use useRequests inside a context provider');
  }

  const { requests, dispatch } = context;

  useEffect(() => {
    const loadRequests = async () => {
      try {
        const { data } = await getRequests();
        dispatch({ type: 'reset', payload: data });
      } catch (error) {
        throw error.message;
      }
    }
    loadRequests();
  }, []);

  return requests;
}