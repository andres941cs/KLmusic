import React, { createContext, useState, ReactNode } from 'react';

// Definición de tipos
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
      // Verificar si el token es válido
      return true;
    }else{
      return false;
    }
  });
  // useEffect(() => {
    
  // }, []);
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

/* EJEMPLO DE USO */

// const {isAuthenticated,login,logout} = useContext(AuthContext)

// Hook personalizado para acceder al contexto de autenticación
// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error('useAuth debe ser utilizado dentro de un AuthProvider');
//   }
//   return context;
// };
