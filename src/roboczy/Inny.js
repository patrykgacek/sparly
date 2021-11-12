import { Link } from "react-router-dom"

const Inny = () => {
    return (
        <div>
            <div className="container antialiased mx-auto filter drop-shadow h-screen flex flex-wrap justify-center items-center">
                <div>
                    <p className="md:text-3xl lg:text-6xl">Mój inny komponent na stronie</p>
                    <Link to='/'>Home</Link>
                </div>
            </div>
        </div>
    )
}

export default Inny