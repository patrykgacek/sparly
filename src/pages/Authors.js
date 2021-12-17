import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

const Authors = () => {
    return (
        <div className="flex justify-center items-center h-screen text-center bg-gradient-to-t from-indigo-200">
            <div>
                <h1 className="text-9xl">
                    Dream Team
                </h1>
                <div className="flex justify-center text-4xl flex-wrap mb-8">
                    <span className="m-3">Patryk</span>
                    <span className="m-3">Mateusz</span>
                    <span className="m-3">Aneta</span>
                    <span className="m-3">Kajetan</span>
                    <span className="m-3">Krzysztof</span>
                    <span className="m-3">Michał</span>
                </div>
                <Link to="/" className="text-5xl"><FontAwesomeIcon icon={faArrowLeft}/></Link>
            </div>
        </div>
    )
}

export default Authors