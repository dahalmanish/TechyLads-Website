import React from 'react'
import { Outlet } from "react-router-dom";

const ProtectedLayout = () => {
  return (
    <div className="flex min-h-screen" >
    <div className="flex-1 p-4 bg-gray-100 overflow-y-auto">
      <Outlet />
    </div>
  </div>
  )
}

export default ProtectedLayout
