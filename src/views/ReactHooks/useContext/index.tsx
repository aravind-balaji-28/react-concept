// Note:
// what is useContext?
// useContext is a React Hook that lets you read and subscribe to context from your component.
import React, { createContext, useState, type ReactNode } from 'react';
interface User {
  name: string;
  age?: number;
}
export interface AuthContextType {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
}
interface AuthProviderProps {
  children: ReactNode;
}
// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const login = ({ name, age }: User) => {
    console.log('name:>>> ', name);
    setUser({ name, age });
  };
  console.log(user, '>User');
  const logout = () => setUser(null);

  const contextValue: AuthContextType = { user, login, logout };
  return (
    <>
      <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
    </>
  );
};
