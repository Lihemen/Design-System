import React, { createContext, useContext } from 'react';

// Implement the auth context as is necessary for a project. This is just a placeholder to give guidance.
// Stick to strict typing to reduce the number of bugs and ensure consistency in arguments.

interface AuthInterface {
  token: string;
  user: User;
}

interface User {
  name: string;
  email: string;
}

const AuthContext = createContext({} as AuthInterface);

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthContext.Provider value={{ token: '', user: { name: '', email: '' } }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthCtx = () => useContext(AuthContext);

export default AuthContextProvider;
