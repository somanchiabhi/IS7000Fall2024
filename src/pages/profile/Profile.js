// src/pages/Profile.js

import React, { useState } from 'react';
import UserProfileSidebar from './UserProfileSidebar';
import ProfileUpdateForm from './ProfileUpdateForm';

function Profile() {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="flex min-h-screen bg-gradient-to-r from-pink-300 via-red-300 to-yellow-300">
      <UserProfileSidebar />
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Profile Details</h1>

        {isEditing ? (
          <ProfileUpdateForm />
        ) : (
          <div className="space-y-4">
            <button
              onClick={() => setIsEditing(true)}
              className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300"
            >
              Edit Personal Information
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;
