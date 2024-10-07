import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet, Navigate } from 'react-router-dom'
function AuthGuard() {

    const user = useSelector(store => store.user.userData)
   /* const user = localStorage.getItem ("token")*/
    console.log(user)
  return (
    <>
    {user ? <Outlet/> : (
        <Navigate  to= "/login" />
    )}
    </>
  )
}

export default AuthGuard