// /* IMPORTACIONES */
// import React, { createContext, useState } from 'react';
// /* CONSTANTES */
// export const AuthContext = createContext();
// /* COMPONENTE */
// const AuthProvider = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   const login = () => {
//     setIsAuthenticated(true);
//   };

//   const logout = () => {
//     setIsAuthenticated(false);
//   };

//   const value = { isAuthenticated, login, logout };

//   return (
//     <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
//   );
// };

// export default AuthProvider;

import React, { createContext, useState, ReactNode, useEffect } from 'react';

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
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(InicialVale.isAuthenticated);
  // const [token, setToken] = useState<string>(InicialVale.token);
  useEffect(() => {
    // const token = localStorage.getItem('token');
    const token = sessionStorage.getItem('token');
    // const user = sessionStorage.getItem('user');
    // VERIFICAR SI ES UN TOLKEN VALIDO
    if (token) {
      // getProfile(token).then((response) => {
      //   console.log(response);
      //   setUser(response);
      // }).catch(() => {
      //   setIsAuthenticated(false);
      // });
      // setToken(token);
      setIsAuthenticated(true);
      console.log("Hay token")
    }
  }, []);
  const login = (token:string) => {
    setIsAuthenticated(true);
    /* LOGIGA DEL LOGIN*/
    // GUARDAR LAS CREDENCIALES
    // getProfile(token).then((response) => {
    //   console.log(response);
    //   sessionStorage.setItem('user', JSON.stringify(response));
    //   setUser(response);
    // });
    // GUARDAR EL TOKEN  EN LA SESION STORAGE
    // localStorage.setItem('token', );
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
