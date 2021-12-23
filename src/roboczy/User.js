import { faSpinner } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

const User = () => {
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const { currentUser, logout, signin, updEmail, updPassword, resetPassword, emailConfirm } = useAuth()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleEmail = e => setEmail(e.target.value)
    const handlePassword = e => setPassword(e.target.value)

    const handleUpdateEmail = async e => {
        e.preventDefault()
        setLoading(true)
        try {
            await updEmail(email)
            setError('')
            setEmail('')
        } catch (error) {
            setError(error.message)
        }
        setLoading(false)
    }

    const handleUpdatePassword = async e => {
        e.preventDefault()

        setLoading(true)
        try {
            await updPassword(password)
            setError('')
            setPassword('')
        } catch (error) {
            setError(error.message)
        }
        setLoading(false)
    }

    const handleLogout = async () => {
        setLoading(true)
        try {
            await logout()
            setError('')
        } catch (error) {
            setError(error.message)
        }
        setLoading(false)
    }

    const handleFastLogin = async () => {
        
        setLoading(true)
        try {
            await signin('usertest@sparly.com', 'sparly123')
            setError('')
        } catch (error) {
            setError(error.message)
        }
        setLoading(false)
    }

    const handleForgotPassword = async () => {
        setLoading(true)
        try {
            await resetPassword(currentUser.email)
            setError('')
        } catch (error) {
            setError(error.message)
        }
        setLoading(false)
    }

    const handleEmailConfirm = async () => {
        setLoading(true)
        try {
            await emailConfirm()
            setError('')
        } catch (error) {
            setError(error.message)
        }
        setLoading(false)
    }

    return (
        <div className="flex justify-center items-center h-screen flex-wrap">
            
                {currentUser ? (
                <div>
                <table className="hover:table-fixed mx-auto mb-20 mt-5">
                    <thead>
                    <tr className="border p-2">
                        <th className="border p-2">Atrybut</th>
                        <th className="border p-2">Wartość</th>
                    </tr>
                    </thead>
                    <tbody>
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
                    <tr>
                        <td colSpan={2}>
                            <button onClick={handleEmailConfirm} className="text-blue-600 underline underline-offset-auto">
                                {loading ? (<FontAwesomeIcon icon={faSpinner} spin />) : 'Confirm your Email'}
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <button onClick={handleForgotPassword} className="text-blue-600 underline underline-offset-auto">
                                {loading ? (<FontAwesomeIcon icon={faSpinner} spin />) : ('Forgot Password')}
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <form onSubmit={handleUpdateEmail}>
                                <input onChange={handleEmail} type="email" required value={email} className="border"/>
                                <button className="text-blue-600 underline underline-offset-auto px-2">
                                    {loading ? <FontAwesomeIcon icon={faSpinner} spin /> : 'Zmień mail'}
                                </button>
                            </form>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <form onSubmit={handleUpdatePassword}>
                                <input onChange={handlePassword} type="password" required value={password} className="border"/>
                                <button className="text-blue-600 underline underline-offset-auto px-2">
                                    {loading ? <FontAwesomeIcon icon={faSpinner} spin /> : 'Zmień hasło'}
                                </button>
                            </form>
                        </td>
                    </tr>
                    <tr>
                        <td>Error:</td>
                        <td>{!! error ? error : 'no errors'}</td>
                    </tr>
                    </tbody>                
                </table>
                <p className="break-all">{JSON.stringify(currentUser)}</p>
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