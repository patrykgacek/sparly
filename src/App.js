//import TestRejestracji from './roboczy/testRejestracjiFirebase'

import { Routes, Route } from "react-router"
import Home from "./pages/Home"
import Inny from "./roboczy/Inny"
import App2 from "./roboczy/App/App"
import Dashboard from "./pages/Dashboard"
import Settings from "./pages/Settings"

const App = () => {
    return (
        <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='app' element={ <App2 /> } />
            <Route path='inny' element={ <Inny /> } />
            <Route path='dashboard' element={ <Dashboard /> } />
            <Route path='settings' element={ <Settings /> } />
        </Routes>
    )
}

export default App