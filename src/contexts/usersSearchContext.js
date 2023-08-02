import React, { createContext, useContext, useState } from 'react';

// Create the context
const UserSearchContext = createContext();

// Create the context provider
export function UserProvider({ children }) {
  const [userData, setUserData] = useState(null);

  return (
    <UserSearchContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserSearchContext.Provider>
  );
}

// Custom hook to consume the context
export function useUserSearchContext() {
  return useContext(UserSearchContext);
}
