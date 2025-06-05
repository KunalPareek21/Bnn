import React from 'react';

const Dashboard: React.FC = () => (
  <div className="p-4">
    <h2 className="text-xl font-bold mb-6">Welcome to Bren Admin Dashboard</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="bg-blue-50 rounded shadow p-4 text-center">
        <div className="text-sm text-gray-500">Users</div>
        <div className="font-bold text-2xl text-blue-700">123</div>
      </div>
      <div className="bg-blue-50 rounded shadow p-4 text-center">
        <div className="text-sm text-gray-500">Leads</div>
        <div className="font-bold text-2xl text-blue-700">32</div>
      </div>
      <div className="bg-blue-50 rounded shadow p-4 text-center">
        <div className="text-sm text-gray-500">Status</div>
        <div className="font-bold text-2xl text-blue-700">Online</div>
      </div>
      <div className="bg-blue-50 rounded shadow p-4 text-center">
        <div className="text-sm text-gray-500">Chats</div>
        <div className="font-bold text-2xl text-blue-700">15</div>
      </div>
    </div>
  </div>
);

export default Dashboard;
