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

import React, { createContext, useState, ReactNode } from 'react';

// Definición de tipos
type IAuthContext = {
  isAuthenticated: boolean;
  login: () => void;
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

  const login = () => {
    setIsAuthenticated(true);
    /* LOGIGA DEL LOGIN*/
    // GUARDAR LAS CREDENCIALES
    // GUARDAR EL TOKEN  EN LA SESION STORAGE
  };

  const logout = () => {
    // Lógica de cierre de sesión
    setIsAuthenticated(false);
    // Borrar el token del sesion storage
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
