import { createContext, useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';


const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate()
     //const [user, setUser] = useState(null)
    const [user, setUser] = useState(sessionStorage.getItem("orgId")?localStorage.getItem('email'):null) 

    const userLogin = (user) => {
        localStorage.setItem("email", user);
        setUser(user)
    }

    const userLogout = () => {
        setUser(null)
    }

    return <AuthContext.Provider value={{ user, userLogin, userLogout }}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
    return useContext(AuthContext)
}