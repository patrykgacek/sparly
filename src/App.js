import { Routes, Route } from "react-router"
import Home from "./pages/Home"
import Inny from "./roboczy/Inny"
import App2 from "./roboczy/App/App"
import Dashboard from "./pages/Dashboard"
import Settings from "./pages/Settings"
import Statistics from "./pages/Statistics"
import Savings from "./pages/Savings"
import LearnMore from "./pages/LearnMore"
import Fb from "./roboczy/testRejestracjiFirebase"
import Authors from "./pages/Authors"
import Article01 from "./articles/Article01"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import BazaTesty from "./roboczy/BazaTesty"
import { AuthProvider } from "./context/AuthContext"
import User from "./roboczy/User"
import Props1 from "./roboczy/testPropsow/Props1"
import PrivateRoute from "./components/PrivateRoute"
import PublicRoute from "./components/PublicRoute"


const App = () => {
    return (
        <AuthProvider>
            <Routes>
                <Route path='/' element={
                    <PublicRoute>
                        <Home />
                    </PublicRoute>
                } />
                <Route path='dashboard' element={
                    <PrivateRoute>
                        <Dashboard />
                    </PrivateRoute>
                } />
                <Route path='statistics' element={
                    <PrivateRoute>
                        <Statistics />
                    </PrivateRoute>
                } />
                <Route path='savings' element={
                    <PrivateRoute>
                        <Savings />
                    </PrivateRoute>
                } />
                <Route path='learnmore' element={
                    <PrivateRoute>
                        <LearnMore />
                    </PrivateRoute>
                } />
                <Route path='settings' element={
                    <PrivateRoute>
                        <Settings />
                    </PrivateRoute>
                } />
                <Route path='authors' element={
                    <Authors />
                } />
                <Route path='signin' element={
                    <PublicRoute>
                        <SignIn />
                    </PublicRoute>
                } />
                <Route path='signup' element={
                    <PublicRoute>
                        <SignUp />
                    </PublicRoute>
                } />

                {/* Articles paths: */}
                <Route path='learnmore/article01' element={
                    <PrivateRoute>
                        <Article01 />
                    </PrivateRoute>
                } />

                {/* Developer paths: */}
                <Route path='baza' element={ <BazaTesty /> } />
                <Route path='app' element={ <App2 /> } />
                <Route path='inny' element={ <Inny /> } />
                <Route path='fb' element={ <Fb /> } />
                <Route path='user' element={ <User /> } />
                <Route path='props' element={ <Props1 /> } />
            </Routes>
        </AuthProvider>
    )
}

export default App