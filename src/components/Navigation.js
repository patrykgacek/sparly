import { faCog, faHome, faSignOutAlt, faVirus } from "@fortawesome/free-solid-svg-icons";
import NavItem from "./NavItem";

const Navigation = () => {
    return (
        <div className="md:w-56 p-3">
            <div className="h-full md:overflow-auto">
                    <NavItem icon={faSignOutAlt} to='/'>Logout</NavItem>
                    <NavItem icon={faHome} to='/dashboard'>Dashboard</NavItem>
                    <NavItem icon={faCog} to='/settings'>Settings</NavItem>
                    <NavItem icon={faVirus} to='/'>Inne</NavItem>
                    <NavItem icon={faVirus} to='/'>Inne</NavItem>
                    <NavItem icon={faVirus} to='/'>Inne</NavItem>
                    <NavItem icon={faVirus} to='/'>Inne</NavItem>
            </div>
        </div>
    )
}

export default Navigation;