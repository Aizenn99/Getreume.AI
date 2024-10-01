import React from 'react';
import { SignIn } from '@clerk/clerk-react';

function Signinpage() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', // Full height of the viewport
      }}
    >
      <SignIn />
    </div>
  );
}

export default Signinpage;
