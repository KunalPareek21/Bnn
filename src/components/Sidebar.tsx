import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NAV_LINKS = [
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/profile', label: 'My Profile' },
  { to: '/users', label: 'User Management' },
];

const Sidebar: React.FC = () => {
  const { pathname } = useLocation();
  return (
    <aside className="bg-white shadow-md min-h-screen w-56 p-4 hidden md:block">
      <nav className="flex flex-col gap-2">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={`px-3 py-2 rounded font-medium hover:bg-blue-50 ${pathname === link.to ? 'bg-blue-100 text-blue-700' : 'text-gray-800'}`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
