import { useContext, useEffect } from 'react';
import { RequestContext } from '../context/RequestContext';
import { 
  getRequests, 
  insertRequest,
  deleteRequest
} from '../services/requests';

export function useRequests() {
  const context = useContext(RequestContext);
  
  if (context === undefined) {
    throw new Error('you did not use useRequests inside a context provider');
  }

  const { requests, dispatch, loading, setLoading } = context;

  
  useEffect(() => {
    const loadRequests = async () => {
      try {
        const data = await getRequests();
        setLoading(false);
        dispatch({ type: 'reset', payload: data });
      } catch (error) {
        throw error.message;
      }
    }
    loadRequests();
  }, []);
  
  const addRequest = async (request) => {
    try {
      const [addedRequest] = await insertRequest(request);
      dispatch({ type: 'add', payload: addedRequest});
      setLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  }

  const handleDelete = async (id) => {
    try {
      await deleteRequest(id);
    } catch (error) {
      console.log(error.message);
    }
  }

  return { 
    requests, 
    addRequest,
    handleDelete,
    loading, 
    setLoading 
  };
}