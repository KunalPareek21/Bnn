import React, { useState } from 'react';
import Button from '../components/Button';

interface LoginProps {
  onLogin: (token: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  // Dummy handleLogin, but integrates sessionStorage
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      // Replace with real API call, returns token on success
      await new Promise((res) => setTimeout(res, 500));
      if (!email || !password) throw new Error('Email and password required.');
      const fakeToken = 'demo-token-bren-' + Date.now();
      sessionStorage.setItem('bren_token', fakeToken);
      onLogin(fakeToken);
    } catch (err: any) {
      setError(err.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
      <form
        onSubmit={handleLogin}
        className="bg-white rounded-lg shadow-md p-8 w-full max-w-sm flex flex-col gap-4"
      >
        <div className="text-center mb-2">
          <div className="flex justify-center mb-1"><div className="h-12 w-12 bg-blue-600 rounded-full text-white flex items-center justify-center text-2xl font-bold">B</div></div>
          <h1 className="text-2xl font-bold text-blue-700">Bren Admin Login</h1>
        </div>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Email"
          className="rounded border px-3 py-2 w-full outline-none focus:ring-2 focus:ring-blue-200"
          autoComplete="username"
        />
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Password"
          className="rounded border px-3 py-2 w-full outline-none focus:ring-2 focus:ring-blue-200"
          autoComplete="current-password"
        />
        {error && <div className="text-red-500 text-sm text-center">{error}</div>}
        <Button type="submit" disabled={loading} className="w-full">
          {loading ? 'Logging in…' : 'Sign In'}
        </Button>
      </form>
    </div>
  );
};

export default Login;
