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
import Logout from "./pages/Logout"


const App = () => {
    return (
        <AuthProvider>
            <Routes>
                <Route path='/' element={ <Home /> } />
                <Route path='dashboard' element={ <Dashboard /> } />
                <Route path='statistics' element={ <Statistics /> } />
                <Route path='savings' element={ <Savings /> } />
                <Route path='learnmore' element={ <LearnMore /> } />
                <Route path='settings' element={ <Settings /> } />
                <Route path='authors' element={ <Authors /> } />
                <Route path='signin' element={ <SignIn /> } />
                <Route path='signup' element={ <SignUp /> } />
                <Route path='logout' element={ <Logout /> } />

                {/* Articles paths: */}
                <Route path='learnmore/article01' element={ <Article01 /> } />

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