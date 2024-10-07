import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet, Navigate } from 'react-router-dom'


function RoutesWithoutUser() {

    const user = localStorage.getItem ("token")
  return (
    <>
    {user ? <Outlet/> : (
        <Navigate  to= "/" />
    )}
    </>
  )
}

export default RoutesWithoutUser