import React from 'react';

const ProfileInfo = ({ name, bio, age, email, profilePicture }) => {
  return (
    <div className="profile-info bg-gradient-to-r from-grey-300 to-black-500 shadow-xl p-10 mx-auto mb-8 max-w-2xl rounded-lg">
      <div className="flex items-center justify-center mb-8">
        <img
          className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-md"
          src={profilePicture || "/images.png"}
          alt={`${name}'s profile`}
        />
      </div>
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">{name}</h2>
        <p className="text-lg italic leading-relaxed text-gray-600 mb-6">{bio}</p>
        <p className="text-md font-light text-gray-700 mb-1">Age: {age}</p>
        <p className="text-md font-light text-gray-700">Email: {email}</p>
      </div>
    </div>
  );
};

export default ProfileInfo;




