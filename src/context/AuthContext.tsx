import { createContext, useState, ReactNode } from 'react';

type IAuthContext = {
  isAuthenticated: boolean;
  login: (token:string) => void;
  logout: () => void;
  // setAuthenticated:(newState:boolean)=>void
};
const InicialVale = {
  isAuthenticated : false,
  // setAuthenticated:()=>{}
  login: () =>{},
  logout: () => {}
}
export const AuthContext = createContext<IAuthContext>(InicialVale);

// Proveedor de autenticación
export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    const token = sessionStorage.getItem('token');
    if (token) {
      return true;
    }else{
      return false;
    }
  });

  const login = (token:string) => {
    setIsAuthenticated(true);
    sessionStorage.setItem('token', token);
  };

  const logout = () => {
    /* LOGIGA DEL LOGOUT*/
    setIsAuthenticated(false);
    sessionStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};