import { createContext, useState } from 'react';
import { getUser } from '../services/user';

export const authContext = createContext();

export function ProvideAuth({ children }) {
  const loggedInUser = getUser();
  const [user, setUser] = useState(
    loggedInUser ? 
    loggedInUser : 
    null
  );

  return (
    <authContext.Provider value={{ user, setUser }}>
      {children}
    </authContext.Provider>
  );
}