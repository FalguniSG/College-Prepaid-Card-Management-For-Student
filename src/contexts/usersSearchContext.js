import React, { createContext, useContext, useState } from 'react';

// Create the context
const UserSearchContext = createContext();

// Create the context provider
export function UserProvider({ children }) {
  const [userSearchData, setUserSearchData] = useState(null);

  return (
    <UserSearchContext.Provider value={{ userSearchData, setUserSearchData }}>
      {children}
    </UserSearchContext.Provider>
  );
}

// Custom hook to consume the context
export function useUserSearchContext() {
  return useContext(UserSearchContext);
}
