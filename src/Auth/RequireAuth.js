import { Navigate, useLocation } from "react-router-dom"
import { useAuth } from "./Auth"

const RequireAuth = ({ children }) => {
    const auth = useAuth()
    const location = useLocation()

    if (!auth.user) {
        return <Navigate to="/login" state={{ path: location.pathname }} replace />
    }

    return children
}

export default RequireAuth