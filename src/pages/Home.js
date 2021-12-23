import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
    return (
        <main className="bg-gradient-to-br from-green-200 via-blue-100 to-green-200 h-screen antialiased text-center flex justify-center md:justify-start items-center">
            <div className="max-w-xs lg:max-w-lg md:ml-16">
                <header className="font-black text-7xl text-gray-900 filter drop-shadow-md lg:text-9xl">
                    Sparly
                </header>
                <div className="mx-5">
                    <p className="my-10 lg:my-14 text-lg lg:text-3xl">
                    Let us manage your home finances better than you ever dreamed of
                    </p>
                    <Link to='dashboard' className="text-md lg:text-2xl transform hover:scale-105 text-white font-bold block p-3 lg:p-5 m-auto rounded-full bg-green-500 hover:bg-green-400 transition-all tracking-wider uppercase " >
                        Get started <FontAwesomeIcon icon={faAngleRight} />
                    </Link>
                    {/* ==== Poniżej te linki co były poprzednio ==== */}
                    {/* <Link to='app'>🍓 Domyślna strona React</Link>
                    <Link to='inny'>🍓 Jakiś inny komponent na stronie</Link> */}
                </div>
            </div>
        </main>
    )
}

export default Home