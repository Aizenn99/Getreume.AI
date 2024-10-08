import React from 'react';
import Header from '../Components/Header';
import { Link, Navigate } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';

function Home() {
  const { isSignedIn } = useUser();

  // Redirect if the user is signed in
  if (isSignedIn) {
    return <Navigate to='/Dashboard' />;
  }

  // Render the Get Started button if the user is not signed in
  return (
    <>
      <div>
        <Header />
        <Link to='/auth/sign-in'>
          <button type='button' className='btn btn-primary'>Get Started</button>
        </Link>
      </div>
    </>
  );
}

export default Home;
