
import React from 'react';
import MailingAddressUpdate from './MailingAddressUpdate';

function Profile() {
  return (
    <div className="flex flex-col items-center p-6 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-gray-700">Profile Page</h1>

      <div className="bg-white shadow-lg p-6 rounded-lg w-full max-w-2xl mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Profile Information</h2>
        <p className="text-gray-600 mb-2">Name: Rohit</p>
        <p className="text-gray-600 mb-2">Email: rohit@gmail.com</p>
        <p className="text-gray-600">Subscription Plan: Basic</p>
      </div>

      <MailingAddressUpdate />
    </div>
  );
}

export default Profile;
