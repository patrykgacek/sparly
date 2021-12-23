import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

const Logout = () => {
    const { logout } = useAuth()
    const navigate = useNavigate()
    
    useEffect(() => {
        try {
            logout()
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }, [])

    return (
        "Wylogowywanie"
    )
}

export default Logout