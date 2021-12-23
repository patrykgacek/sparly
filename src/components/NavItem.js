import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

const NavItem = ({icon, to, children}) => {
    return (
            <NavLink 
            className="flex text-sm hover:bg-gray-200 rounded py-2 px-3 mb-1 transition-colors"
            to={to}>
                <div className="w-5 mr-2 text-gray-800 text-center">
                    <FontAwesomeIcon icon={icon} />
                </div>
                { children }
            </NavLink>
    )
}

export default NavItem;