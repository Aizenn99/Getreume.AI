import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navigate, Outlet } from 'react-router-dom'
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { useUser } from '@clerk/clerk-react';





function App() {
  const [count, setCount] = useState(0)
  const{user,isLoaded,isSignedIn}=useUser();


  if(!isSignedIn&&isLoaded){
    return <Navigate  to={'auth/sign-in'} />
  }  
  return (
    <>
      <Outlet/>
      <header>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
      
    </>
  ) 

}

export default App
