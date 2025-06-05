import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import MyProfile from '../pages/MyProfile';
import UserManagement from '../pages/UserManagement';
import { AuthContext } from '../context/AuthContext';

// ProtectedRoute: blocks access if not authenticated
const ProtectedRoute: React.FC<{ children: React.ReactElement }> = ({ children }) => {
  const { token } = useContext(AuthContext);
  if (!token) {
    return <Navigate to="/" replace />;
  }
  return children;
};

const AppRoutes: React.FC<{ onLogin: (token: string) => void }> = ({ onLogin }) => {
  return (
    <Routes>
      <Route path="/" element={<Login onLogin={onLogin} />} />
      <Route
        path="/dashboard"
        element={<ProtectedRoute><Dashboard /></ProtectedRoute>}
      />
      <Route
        path="/profile"
        element={<ProtectedRoute><MyProfile /></ProtectedRoute>}
      />
      <Route
        path="/users"
        element={<ProtectedRoute><UserManagement /></ProtectedRoute>}
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;
