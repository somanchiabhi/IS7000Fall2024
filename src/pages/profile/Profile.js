
import React from 'react';
import UserProfileSidebar from './UserProfileSidebar';
import UserProfileDetails from './UserProfileDetails';

function Profile() {
  return (
    <div className="flex min-h-screen bg-gradient-to-r from-pink-300 via-red-300 to-yellow-300">
      <UserProfileSidebar />

      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Profile Details</h1>
        <UserProfileDetails />
      </div>
    </div>
  );
}

export default Profile;
