import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

const NavLogout = ({icon, children}) => {
    const { logout } = useAuth()
    const [loading, setLoading] = useState(false)

    const handleLogout = async () => {
        try {
            setLoading(true)
            await logout()
        } catch (error) {
            console.log(error)
        }
    }

    return (
            <button onClick={handleLogout} className="flex text-sm hover:bg-gray-200 rounded py-2 px-3 mb-1 transition-colors w-full" >
                <div className="w-5 mr-2 text-gray-800 text-center">
                    { loading
                    ? <FontAwesomeIcon icon={faSpinner} spin />
                    : <FontAwesomeIcon icon={icon} />}
                </div>
                { children }
            </button>
    )
}

export default NavLogout;