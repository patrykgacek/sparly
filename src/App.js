import { Routes, Route } from "react-router"
import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard"
import Settings from "./pages/Settings"
import Statistics from "./pages/Statistics"
import Savings from "./pages/Savings"
import LearnMore from "./pages/LearnMore"
import Authors from "./pages/Authors"
import Article01 from "./articles/Article01"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import { AuthProvider } from "./context/AuthContext"
import PrivateRoute from "./components/PrivateRoute"
import PublicRoute from "./components/PublicRoute"
import { DatabaseProvider } from "./context/DatabaseContext"
import ResetPassword from "./pages/ResetPassword"

const App = () => {
    return (
        <AuthProvider>
        <DatabaseProvider>
        <Routes>
            {/* App paths */}
            <Route path='/' element={<PublicRoute><Home /></PublicRoute>} />
            <Route path='dashboard' element={<PrivateRoute><Dashboard /></PrivateRoute>} />
            <Route path='statistics' element={<PrivateRoute><Statistics /></PrivateRoute>} />
            <Route path='savings' element={<PrivateRoute><Savings /></PrivateRoute>} />
            <Route path='learnmore' element={<PrivateRoute><LearnMore /></PrivateRoute>} />
            <Route path='settings' element={<PrivateRoute><Settings /></PrivateRoute>} />
            <Route path='authors' element={<Authors />} />
            <Route path='signin' element={<PublicRoute><SignIn /></PublicRoute>} />
            <Route path='signup' element={<PublicRoute><SignUp /></PublicRoute>} />
            <Route path='resetpassword' element={<PublicRoute><ResetPassword /></PublicRoute>} />
            {/* Articles paths: */}
            <Route path='learnmore/article01' element={<PrivateRoute><Article01 /></PrivateRoute>} />
        </Routes>
        </DatabaseProvider>
        </AuthProvider>
    )
}

export default App