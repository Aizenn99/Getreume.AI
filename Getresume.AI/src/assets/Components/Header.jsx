import { UserButton } from '@clerk/clerk-react';
import React from 'react';

function Header() {
  return (
    <div className="d-flex justify-content-between align-items-center p-2 shadow-lg  ">
      <img 
        src='/book-svgrepo-com.svg'
        style={{ width: '40px', height: '40px' }} 
        alt="Book Icon"
      />
      <div className="user me-4">
      <UserButton/>
      </div>
    </div>
  );
}

export default Header;
