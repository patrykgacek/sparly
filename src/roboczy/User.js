import { faSpinner } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

const User = () => {
    const [alert, setAlert] = useState('')
    const [loading, setLoading] = useState(false)
    const { currentUser, logout, signin } = useAuth()


    useEffect(() => console.log(currentUser), [currentUser])

    const handleLogout = async () => {
        setLoading(true)
        try {
            await logout()
        } catch (e) {
            console.log(e)
        }
        setLoading(false)
    }

    const handleFastLogin = async () => {
        
        setLoading(true)
        try {
            await signin('usertest@sparly.com', 'sparly123')
        } catch (e) {
            console.log(e)
        }
        setLoading(false)
    }

    return (
        <div className="flex justify-center items-center h-screen flex-wrap">
            
                {currentUser ? (
                <div>
                <table className="hover:table-fixed mx-auto mb-20 mt-5">
                    <tr className="border p-2">
                        <th className="border p-2">Atrybut</th>
                        <th className="border p-2">Wartość</th>
                    </tr>
                    <tr className="border p-2">
                        <td className="border p-2">Email</td>
                        <td className="border p-2">{currentUser.email}</td>
                    </tr>
                    <tr className="border p-2">
                        <td className="border p-2">Email verified</td>
                        <td className="border p-2">{currentUser.emailVerified ? 'true' : 'false'}</td>
                    </tr>
                    <tr className="border p-2">
                        <td className="border p-2">User UID</td>
                        <td className="border p-2">{currentUser.uid}</td>
                    </tr>
                    <tr className="border p-2">
                        <td className="border p-2">Created</td>
                        <td className="border p-2">{currentUser.metadata.creationTime}</td>
                    </tr>
                    <tr className="border p-2">
                        <td className="border p-2">Last login</td>
                        <td className="border p-2">{currentUser.metadata.lastSignInTime}</td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <button onClick={handleLogout} className="text-blue-600 underline underline-offset-auto">
                                {loading ? (<FontAwesomeIcon icon={faSpinner} spin />) : ('Logout')}
                            </button>
                        </td>
                    </tr>                
                </table>
                <p className="break-all">{JSON.stringify(currentUser,null,'\t')}</p>
                
                </div>
                ) : (
                <ul>
                    <li>
                        Unknown user
                    </li>
                    <li>
                        <Link to='/signin' className="text-blue-600 underline underline-offset-auto">
                            Signin
                        </Link>
                        <span> or </span>
                        <Link to='/signup' className="text-blue-600 underline underline-offset-auto">
                            Signup
                        </Link>
                        <span> or </span>
                        <button onClick={handleFastLogin} className="text-blue-600 underline underline-offset-auto">
                                {loading ? (<FontAwesomeIcon icon={faSpinner} spin />) : ('Fast Login')}
                            </button>
                    </li>
                </ul>
                )}
                
                
            
        </div>
    )
}

export default User