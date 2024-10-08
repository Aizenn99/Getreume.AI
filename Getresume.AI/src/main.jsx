import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; 
import Signinpage from './assets/auth/sign-in/index.jsx';
import Home from './assets/Home/index.jsx';
import Dashboard from './assets/Dashboard/index.jsx';

import { ClerkProvider } from '@clerk/clerk-react'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
     
      {
        path: '/Dashboard',
        element: <Dashboard />,
      },
    ],
  },
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/auth/sign-in',
    element: <Signinpage />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
    <RouterProvider router={router} /> 
    </ClerkProvider>
  </StrictMode>
);
