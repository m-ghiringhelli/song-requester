import { useContext } from 'react';
import { authContext } from '../context/ProvideAuth';

export function useAuth() {
  const context = useContext(authContext);

  if (context === undefined) {
    throw new Error('you must use useAuth within a context provider')
  }

  return context;
}