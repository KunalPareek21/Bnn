import React, { useState } from 'react';
import UserManagementPopup from '../components/UserManagementPopup';

const DUMMY_USERS = [
  { name: 'Alice', email: 'alice@bren.com', role: 'User', status: 'Active' },
  { name: 'Bob', email: 'bob@bren.com', role: 'Manager', status: 'Suspended' },
  { name: 'Eve', email: 'eve@bren.com', role: 'Admin', status: 'Active' },
];

const UserManagement: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState<typeof DUMMY_USERS[0] | null>(null);
  const [popupOpen, setPopupOpen] = useState(false);

  const openPopup = (user: typeof DUMMY_USERS[0]) => {
    setSelectedUser(user);
    setPopupOpen(true);
  };
  return (
    <div className="p-4">
      <h2 className="font-bold text-lg mb-4">User Management</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded shadow">
          <thead>
            <tr className="bg-blue-50 text-left">
              <th className="p-2">Name</th>
              <th className="p-2">Email</th>
              <th className="p-2">Role</th>
              <th className="p-2">Status</th>
              <th className="p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {DUMMY_USERS.map((user, idx) => (
              <tr key={user.email} className="border-b hover:bg-blue-50">
                <td className="p-2">{user.name}</td>
                <td className="p-2">{user.email}</td>
                <td className="p-2">{user.role}</td>
                <td className="p-2">{user.status}</td>
                <td className="p-2">
                  <button
                    className="text-blue-600 hover:underline"
                    onClick={() => openPopup(user)}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <UserManagementPopup
        isOpen={popupOpen}
        onClose={() => setPopupOpen(false)}
        user={selectedUser || undefined}
      />
    </div>
  );
};

export default UserManagement;
