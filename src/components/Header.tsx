import React from 'react';

interface HeaderProps {
  onLogout?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLogout }) => (
  <header className="w-full flex items-center justify-between bg-white shadow px-6 py-3">
    <div className="flex items-center gap-2">
      <div className="h-8 w-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">B</div>
      <span className="font-bold text-xl text-gray-800">Bren Admin</span>
    </div>
    {onLogout && (
      <button
        onClick={onLogout}
        className="text-sm px-3 py-1 rounded bg-gray-100 hover:bg-blue-100 text-blue-700 font-semibold"
      >Logout</button>
    )}
  </header>
);

export default Header;
