import { Link } from "react-router-dom"
import Input from "../components/Input"

const SignIn = () => {
    return (
        <div className="flex justify-center items-center bg-gradient-to-br from-green-200 via-blue-100 to-green-200 h-screen">
            <div className="w-full max-w-md p-4 bg-white p-10 rounded-xl">
                <h1 className="text-2xl mb-8">Signin</h1>
                <div className="mb-3">
                    <label for="name" className="form-label inline-block mb-2 text-gray-700">
                        Email
                    </label>
                    <Input type="text" placeholder="" id="email" />
                </div>
                <div className="mb-8">
                    <label for="name" className="form-label inline-block mb-2 text-gray-700">
                        Password
                    </label>
                    <Input type="text" placeholder="" id="name" />
                </div>
                <Link to="/dashboard" className="px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Login</Link>
            </div>
            

        </div>
    )
}

export default SignIn