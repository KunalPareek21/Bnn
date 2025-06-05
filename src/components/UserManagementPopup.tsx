import React from 'react';

interface UserManagementPopupProps {
  isOpen: boolean;
  onClose: () => void;
  user?: {
    name: string;
    email: string;
    role: string;
    status: string;
  };
}

const UserManagementPopup: React.FC<UserManagementPopupProps> = ({ isOpen, onClose, user }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
        <h2 className="font-semibold text-lg mb-3">User Details</h2>
        {user ? (
          <div className="mb-4">
            <div><strong>Name:</strong> {user.name}</div>
            <div><strong>Email:</strong> {user.email}</div>
            <div><strong>Role:</strong> {user.role}</div>
            <div><strong>Status:</strong> {user.status}</div>
          </div>
        ) : (
          <div className="mb-4 text-gray-500">No user selected.</div>
        )}
        <button className="bg-blue-600 text-white px-4 py-2 rounded mt-2" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default UserManagementPopup;
