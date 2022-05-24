import { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { RequestContext } from '../context/RequestContext';
import { 
  getRequests, 
  insertRequest,
  deleteRequest,
  updateRequest
} from '../services/requests';

export function useRequests() {
  const context = useContext(RequestContext);
  const history = useHistory();
  
  if (context === undefined) {
    throw new Error('you did not use useRequests inside a context provider');
  }

  const { requests, dispatch, loading, setLoading } = context;
  
  // loads requests from supabase and sets in context
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
  
  // adds request to supabase and add to context
  const addRequest = async (request) => {
    try {
      setLoading(true);
      const [addedRequest] = await insertRequest(request);
      dispatch({ type: 'add', payload: addedRequest });
      setLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  }

  // deletes request from supabase and removes from context
  const handleDelete = async (id) => {
    try {
      setLoading(true);
      await deleteRequest(id);
      dispatch({ type: 'delete', payload: id });
      setLoading(false);
      history.replace('/');
    } catch (error) {
      console.log(error.message);
    }
  }

  // updates request in supabase and updates in context
  const handleUpdate = async (request, id) => {
    try {
      setLoading(true);
      await updateRequest(request, id);
      dispatch({ type: 'update', payload: request })
      setLoading(false);
      history.replace('/');
    } catch (error) {
      console.log(error.message);
    }
  }

  return { 
    requests, 
    addRequest,
    handleDelete,
    handleUpdate,
    loading, 
    setLoading 
  };
}