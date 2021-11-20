import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

const NavItem = ({icon, to, children}) => {
    return (
            <NavLink 
            className="text-xl block hover:bg-gray-200 rounded-md py-2 px-3 mb-3"
            to={to}>
                <div className="inline-block w-5 mr-2">
                    <FontAwesomeIcon icon={icon} />
                </div>
                { children }
            </NavLink>
    )
}

export default NavItem;