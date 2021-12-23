import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import ButtonPrimary from "../components/Tailwind/ButtonPrimary";
import Input from "../components/Tailwind/Input";
import ToastError from "../components/Tailwind/ToastError";
import { useAuth } from "../context/AuthContext";

const SignUp = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [alert, setAlert] = useState('')
    const [loading, setLoading] = useState(false)
    const { signup, developerLogin } = useAuth()
    const navigate = useNavigate()

    const handleEmail = e => setEmail(e.target.value)
    const handlePassword = e => setPassword(e.target.value)
    const handlePasswordConfirm = e => setPasswordConfirm(e.target.value)

    const register = async e => {
        e.preventDefault()

        if (password !== passwordConfirm) {
            return setAlert('Passwords do not match')
        }

        try {
            setLoading(true)
            await signup(email, password)
            navigate('/dashboard')
        } catch (error) {
            switch (error.code) {
                case 'auth/invalid-email':
                    setAlert('Invalid Email')
                    break
                case 'auth/email-already-exists':
                    setAlert('User with email alredy exist')
                    break
                case 'auth/weak-password':
                    setAlert('Password should be at least 6 characters')
                    break
                default:
                    setAlert(error.message)
                    break
            }
        }

        setLoading(false)
    }

    const handleDeveloperLogin = async () => {
        try {
            setLoading(true)
            await developerLogin()
            navigate('/dashboard')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="flex justify-center items-center bg-gradient-to-br from-green-200 via-blue-100 to-green-200 min-h-screen p-5">
            <form onSubmit={register} className="w-full max-w-md bg-white p-10 rounded-xl ">      
                <h1 className="text-2xl mb-8">Signup</h1>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label inline-block mb-2 text-gray-700">Email</label>
                    <Input type="email" placeholder="" id="email" onChange={handleEmail} value={email} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label inline-block mb-2 text-gray-700">Password</label>
                    <Input type="password" placeholder="" id="password" onChange={handlePassword} value={password} required />
                </div>
                <div className="mb-8">
                    <label htmlFor="passwordConfirm" className="form-label inline-block mb-2 text-gray-700">Confirm password</label>
                    <Input type="password" placeholder="" id="passwordConfirm" onChange={handlePasswordConfirm} value={passwordConfirm} required />
                </div>
                
                {!!alert && (
                    <div className="mb-7">
                        <ToastError title='A problem has occured'>{alert}</ToastError>
                    </div>
                )}
                <ButtonPrimary disabled={loading}>
                    {loading ? (<FontAwesomeIcon icon={faCircleNotch} spin />) : ('Register')}
                </ButtonPrimary>
                <p className="text-right">
                    <Link to="/signin">Already have an account? <span className="text-blue-500">SignIn!</span></Link>
                    <br />
                    <button type="button" onClick={handleDeveloperLogin} className="text-red-600">Developer signin</button>
                </p>
            </form>
        </div>
    )
}

export default SignUp