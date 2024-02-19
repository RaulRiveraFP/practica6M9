import React from 'react';
import '../App.css';
import avatarLogo from '../../public/avatarLogo.png';  // Update the import statement

function Avatar(props) {
  return (
    <>
      <div className="flex items-center space-x-4">
        <div className="w-10 h-10 bg-gray-300 rounded-full overflow-hidden">
          <img src={avatarLogo} alt="Avatar" className="w-full h-full object-cover" />
        </div>
        <span className="text-gray-800 font-semibold">{props.username}</span>
      </div>
    </>
  );
}

export default Avatar