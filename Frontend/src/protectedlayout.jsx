import { RedirectToSignIn, SignedIn, SignedOut, useUser } from "@clerk/clerk-react";
import React from 'react';
import { Navigate, Outlet } from "react-router-dom";

const ProtectedLayout = () => {
  const {user,isLoading}=useUser();
  if(user && user.publicMetadata.role !=="admin"){
    return <Navigate to="/" replace />;
  }
  return (
    <>
    <SignedIn>
    <div className="flex min-h-screen" >
    <div className="flex-1 p-4 bg-gray-100 overflow-y-auto">
      <Outlet />
    </div>
  </div>
  </SignedIn>
  <SignedOut>
  <RedirectToSignIn />
  </SignedOut>
  </>
  )
}

export default ProtectedLayout

