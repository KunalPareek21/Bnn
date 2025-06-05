import { useAuthContext } from '../context/AuthContext';

export const useAuth = () => {
  const { token, setToken, logout } = useAuthContext();

  // Simulate login which sets token
  const login = (token: string) => {
    setToken(token);
  };

  // Whether user is authenticated
  const isAuthenticated = Boolean(token);

  return {
    token,
    login,
    logout,
    isAuthenticated
  };
};
