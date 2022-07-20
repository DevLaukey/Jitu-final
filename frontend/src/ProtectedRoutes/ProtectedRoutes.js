import React from 'react'
import { Outlet } from 'react-router-dom'
import Login from '../components/logins/Login'
const useAuth = () => {
    const user = { loggedIn: true }
    return user && user.loggedIn
}
const ProtectedRoutes = () => {

    const isAuth = useAuth()
    return isAuth ? <Outlet /> : <Login />

}

export default ProtectedRoutes