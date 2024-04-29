/* IMPORTACIONES */
import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from './AuthContext';

/* COMPONENTE */
function ProtectedRoute (){
  const { isAuthenticated } = useContext(AuthContext);
  if (!isAuthenticated) {
    // REDIRECCIONAR AL LOGIN SI EL USUARIO NO ESTA AUTENTICADO
    return <Navigate to="/login" replace />; 
  }
  return <Outlet/>
}

export default ProtectedRoute;

/*
PARA USARLO SE PONE COMO HIJO LA RUTA QUE QUEREMOS PROTEJER
*/
// import React, { useContext } from 'react';
// import { Navigate, Outlet } from 'react-router-dom';
// import { AuthContext } from './AuthContext'; // Assuming AuthContext is defined

// interface AuthContextValue {
//   isAuthenticated: boolean;
// }

// const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const { isAuthenticated } = useContext<AuthContextContextValue>(AuthContext);

//   if (!isAuthenticated) {
//     // REDIRECCIONAR AL LOGIN SI EL USUARIO NO ESTA AUTENTICADO
//     return <Navigate to="/login" replace />;
//   }

//   return children;
// };

// export default ProtectedRoute;
