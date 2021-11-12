import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div>
            <div className="container antialiased mx-auto filter drop-shadow h-screen flex flex-wrap justify-center items-center">
                <div>
                    <p className="md:text-3xl lg:text-6xl pb-4">Landing Page</p>
                    <ul>
                        <li><Link to='app'>🍓 Domyślna strona React</Link></li>
                        <li><Link to='inny'>🍓 Jakiś inny komponent na stronie</Link></li>
                        <li><Link to='dashboard'>🍓 Główna aplikacja</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Home