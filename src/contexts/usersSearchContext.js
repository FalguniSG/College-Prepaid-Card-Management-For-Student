import React, { createContext, useContext, useState } from 'react';

// Create the context
const UserContext = createContext();

// Create the context provider
export function UserProvider({ children }) {
  const [userData, setUserData] = useState(null);

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
}

// Custom hook to consume the context
export function useUserContext() {
  return useContext(UserContext);
}
