import React from 'react';

const MyProfile: React.FC = () => (
  <div className="p-4 max-w-xl mx-auto">
    <h2 className="font-bold text-lg mb-4">My Profile</h2>
    <div className="bg-white rounded shadow p-4">
      <div className="mb-2"><strong>Name:</strong> John Doe</div>
      <div className="mb-2"><strong>Email:</strong> johndoe@bren.com</div>
      <div className="mb-2"><strong>Role:</strong> Admin</div>
      <div><strong>Status:</strong> Active</div>
    </div>
  </div>
);

export default MyProfile;
