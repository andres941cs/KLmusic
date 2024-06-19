/* IMPORTACIONES */
import { FC, ReactNode, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '@context/AuthContext';

/* COMPONENTE */
const ProtectedRoute: FC<{ children: ReactNode }> = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext);

  if (!isAuthenticated) {
    // REDIRECCIONAR AL LOGIN SI EL USUARIO NO ESTA AUTENTICADO
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
