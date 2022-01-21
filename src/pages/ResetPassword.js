import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
import ButtonPrimary from "../components/Tailwind/ButtonPrimary";
import Input from "../components/Tailwind/Input";
import ToastError from "../components/Tailwind/ToastError";
import { useAuth } from "../context/AuthContext";



const ResetPassword = () => {
    const [email, setEmail] = useState('')
    const [alert, setAlert] = useState('')
    const [loading, setLoading] = useState(false)
    const [emailSend, setEmailSend] = useState(false)
    const { resetPassword } = useAuth()
    
    const handleEmail = e => setEmail(e.target.value)

    const handleResetPassword = async e => {
        e.preventDefault()
    
            try {
                setLoading(true)
                await resetPassword(email)
                setEmailSend(true)
            } catch (error) {
                switch (error.code) {
                    case 'auth/invalid-email':
                        setAlert('Invalid Email')
                        break
                    case 'auth/user-not-found':
                        setAlert('User not found')
                        break
                    default:
                        setAlert(error.message)
                        break
                }
                setLoading(false)
            }
    }

    return (
        emailSend ? (
            <div className="flex justify-center items-center bg-gradient-to-br from-green-200 via-blue-100 to-green-200 h-screen p-5">
            <form onSubmit={handleResetPassword} className="w-full max-w-md bg-white p-10 rounded-xl">
                <h1 className="text-2xl mb-8">Reset your passowrd</h1>
                <p>
                    Email was send
                </p>
                <p className="text-right mt-5">
                    <Link to="/signin">Back to <span className="text-blue-500">SignIn</span></Link>
                </p>
            </form>
        </div>
        ) : (
        <div className="flex justify-center items-center bg-gradient-to-br from-green-200 via-blue-100 to-green-200 h-screen p-5">
            <form onSubmit={handleResetPassword} className="w-full max-w-md bg-white p-10 rounded-xl">
                <h1 className="text-2xl mb-8">Reset your passowrd</h1>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label inline-block mb-2 text-gray-700">Email</label>
                    <Input type="email" placeholder="Email" id="email" onChange={handleEmail} value={email} required />
                </div>

                {!!alert && <ToastError title="A problem has occured">{alert}</ToastError>}

                <ButtonPrimary disabled={loading}>
                    {loading ? (<FontAwesomeIcon icon={faSpinner} spin />) : ('Send')}
                </ButtonPrimary>
                <p className="text-right mt-5">
                    <Link to="/signin">Back to <span className="text-blue-500">SignIn</span></Link>
                </p>
            </form>
        </div>
        )
    )
}

export default ResetPassword