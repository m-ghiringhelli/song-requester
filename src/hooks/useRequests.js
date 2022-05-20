import { useContext, useEffect, useState } from 'react';
import { RequestContext } from '../context/RequestContext';
import { getRequests, insertRequest } from '../services/requests';

export function useRequests() {
  const [loading, setLoading] = useState(true);
  const context = useContext(RequestContext);
  
  if (context === undefined) {
    throw new Error('you did not use useRequests inside a context provider');
  }

  const { requests, dispatch } = context;

  
  useEffect(() => {
    const loadRequests = async () => {
      try {
        const data = await getRequests();
        dispatch({ type: 'reset', payload: data });
        setLoading(false);
      } catch (error) {
        throw error.message;
      }
    }
    loadRequests();
  }, []);
  
  const addRequest = async (request) => {
    try {
      const addedRequest = await insertRequest(request);
      dispatch({ type: 'add', payload: addedRequest});
      setLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  }

  return { requests, addRequest, loading };
}