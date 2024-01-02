import { useState } from 'react';
import { createContext } from 'react';

const AuthContext = createContext({
  name: '',
  accessToken: '',
  role: '',
});

export default AuthContext;

export function AuthContextProvider({ children }) {
  const [auth, setAuth] = useState({
    name: '',
    accessToken: '',
    role: '',
  });
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
}
