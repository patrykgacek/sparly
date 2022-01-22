import { faSpinner } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { Link } from "react-router-dom"
import ButtonPrimary from "../components/Tailwind/ButtonPrimary"
import Input from "../components/Tailwind/Input"
import ToastError from "../components/Tailwind/ToastError"
import { useAuth } from "../context/AuthContext"

const SignIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [alert, setAlert] = useState('')
    const [loading, setLoading] = useState(false)
    const { signin } = useAuth()

    const handleEmail = e => setEmail(e.target.value)
    const handlePassword = e => setPassword(e.target.value)

    const login = async e => {
        e.preventDefault()

        try {
            setLoading(true)
            await signin(email, password)
        } catch (error) {
            switch (error.code) {
                case 'auth/invalid-email':
                    setAlert('Invalid Email')
                    break
                case 'auth/user-not-found':
                    setAlert('User not found')
                    break
                case 'auth/wrong-password':
                    setAlert('Wrong password')
                    break
                default:
                    setAlert(error.message)
                    break
            }
            setLoading(false)
        }
    }

    return (
        <div className="flex justify-center items-center bg-gradient-to-br from-green-200 via-blue-100 to-green-200 h-screen p-5">
            <form onSubmit={login} className="w-full max-w-md bg-white p-10 rounded-xl">
                <h1 className="text-2xl mb-8">Signin</h1>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label inline-block mb-2 text-gray-700">Email</label>
                    <Input type="email" placeholder="Email" id="email" onChange={handleEmail} value={email} required />
                </div>
                <div className="mb-8">
                    <label htmlFor="password" className="form-label inline-block mb-2 text-gray-700">Password</label>
                    <Input type="password" placeholder="Password" id="password" onChange={handlePassword} value={password} required />
                </div>

                {!!alert && <ToastError title="A problem has occured">{alert}</ToastError>}

                <ButtonPrimary disabled={loading}>
                    {loading ? (<FontAwesomeIcon icon={faSpinner} spin />) : ('Login')}
                </ButtonPrimary>
                <p className="text-right mt-5">
                    <Link to="/resetpassword">Don't remember your password? <span className="text-blue-500">Reset!</span></Link>
                    <br /><br />
                    <Link to="/signup">Don't have an account? <span className="text-blue-500">SignUp!</span></Link>
                </p>
                
            </form>
        </div>
    )
}

export default SignIn