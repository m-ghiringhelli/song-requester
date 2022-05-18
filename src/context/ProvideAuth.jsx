import { createContext, useState } from 'react';

export const authContext = createContext();

export function ProvideAuth({ children }) {
  const [user, setUser] = useState(null);

  return (
    <authContext.Provider value={{ user, setUser }}>
      {children}
    </authContext.Provider>
  );
}