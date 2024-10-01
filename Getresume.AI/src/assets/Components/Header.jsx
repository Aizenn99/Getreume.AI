import React from 'react';

function Header() {
  return (
    <div className="d-flex justify-content-between align-items-center p-2">
      <img 
        src='/book-svgrepo-com.svg'
        style={{ width: '40px', height: '40px' }} 
        alt="Book Icon"
      />
      <div className="btn btn-dark">Sign In</div>
    </div>
  );
}

export default Header;
