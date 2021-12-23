import { faSpinner } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

const SignIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [alert, setAlert] = useState('')
    const [loading, setLoading] = useState(false)
    const { signin } = useAuth()
    const navigate = useNavigate()

    const handleEmail = e => setEmail(e.target.value)
    const handlePassword = e => setPassword(e.target.value)

    const login = async e => {
        e.preventDefault()

        try {
            setLoading(true)
            await signin(email, password)
            navigate('/user')
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.dir(errorCode)
            console.dir(errorMessage)

            setAlert(errorMessage)
        }

        setLoading(false)
    }

    const validateEmail = () => {

    }

    return (
        <div className="flex justify-center items-center bg-gradient-to-br from-green-200 via-blue-100 to-green-200 h-screen">
            <div className="w-full max-w-md p-4 bg-white p-10 rounded-xl">
                <h1 className="text-2xl mb-8">Signin</h1>
                <div className="mb-3">
                    <label for="name" className="form-label inline-block mb-2 text-gray-700">
                        Email
                    </label>
                    <input
                        className="
                            form-control
                            block
                            w-full
                            px-3
                            py-1.5
                            text-base
                            font-normal
                            text-gray-700
                            bg-white bg-clip-padding
                            border border-solid border-gray-300
                            rounded
                            transition
                            ease-in-out
                            m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                        "
                        type="email" placeholder="" id="email" onChange={handleEmail} value={email}
                    />
                </div>
                <div className="mb-8">
                    <label for="name" className="form-label inline-block mb-2 text-gray-700">
                        Password
                    </label>
                    <input
                        className="
                            form-control
                            block
                            w-full
                            px-3
                            py-1.5
                            text-base
                            font-normal
                            text-gray-700
                            bg-white bg-clip-padding
                            border border-solid border-gray-300
                            rounded
                            transition
                            ease-in-out
                            m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                        "
                        type="password" placeholder="" id="password" onChange={handlePassword} value={password}
                    />
                </div>
                {
                !!alert ? (
                    <div className="flex flex-col justify-center mb-4">
                    <div className="bg-red-600 shadow-lg mx-auto w-96 max-w-full text-sm pointer-events-auto bg-clip-padding rounded-lg block mb-3" id="static-example" role="alert" aria-live="assertive" aria-atomic="true" data-mdb-autohide="false">
                        <div className="bg-red-600 flex justify-between items-center py-2 px-3 bg-clip-padding border-b border-red-500 rounded-t-lg">
                            <p className="font-bold text-white flex items-center">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times-circle" className="svg-inline--fa fa-times-circle w-4 h-4 mr-2 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"></path>
                                </svg>
                                A problem has occured</p>
                        </div>
                        <div className="p-3 bg-red-600 rounded-b-lg break-words text-white">
                            {alert}
                        </div>
                    </div>
                </div>  
                ) : ("")
                }
                <button onClick={login} disabled={loading} to="/dashboard" className="px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                    {loading ? (<FontAwesomeIcon icon={faSpinner} spin />) : ('Login')}
                </button>
            </div>
        </div>
    )
}

export default SignIn