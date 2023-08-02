import React, { createContext, useContext, useState } from 'react';

// Create the context
const AuthContext = createContext();

// Create the context provider
export function AuthProvider({ children }) {
  const [authData, setAuthData] = useState(null);

  return (
    <AuthContext.Provider value={{ authData, setAuthData }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to consume the context
export function useAuthContext() {
  return useContext(AuthContext);
}
