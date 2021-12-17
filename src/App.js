//import TestRejestracji from './roboczy/testRejestracjiFirebase'

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


const App = () => {
    return (
        <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='dashboard' element={ <Dashboard /> } />
            <Route path='statistics' element={ <Statistics /> } />
            <Route path='savings' element={ <Savings /> } />
            <Route path='learnmore' element={ <LearnMore /> } />
            <Route path='settings' element={ <Settings /> } />
            <Route path='authors' element={ <Authors /> } />

            {/* Articles paths: */}
            <Route path='learnmore/article01' element={ <Article01 /> } />

            {/* Developer paths: */}
            <Route path='app' element={ <App2 /> } />
            <Route path='inny' element={ <Inny /> } />
            <Route path='fb' element={ <Fb /> } />
        </Routes>
    )
}

export default App