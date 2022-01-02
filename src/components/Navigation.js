import { faChartPie, faCog, faCoins, faInfo, faPiggyBank, faRadiation, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import HeaderBar from "./HeaderBar";
import NavItem from "./NavItem";
import NavLogout from "./NavLogout";

const Navigation = () => {
    return (
        <div className="md:w-56 p-3">
            <div className="h-full md:overflow-auto">
                    <HeaderBar />
                    <hr className="my-2"></hr>
                    <NavItem icon={faCoins} to='/dashboard'>Budget</NavItem>
                    <NavItem icon={faPiggyBank} to='/savings'>Savings</NavItem>
                    <NavItem icon={faChartPie} to='/statistics'>Statistics</NavItem>
                    <NavItem icon={faInfo} to='/learnmore'>Learn more</NavItem>
                    <hr className="my-2"></hr>
                    <NavItem icon={faCog} to='/settings'>Settings</NavItem>
                    <NavLogout icon={faSignOutAlt} >Logout</NavLogout>
                    <hr className="my-2"></hr>
                    <NavItem icon={faRadiation} to='/user'>DevUser</NavItem>
                    <NavItem icon={faRadiation} to='/baza'>DevDatabase</NavItem>
                    <NavItem icon={faRadiation} to='/baza2'>DevDatabase2</NavItem>
                    <p className="mt-5 text-center text-xs text-gray-400 invisible md:visible">
                        <Link to="/authors">
                            <span dangerouslySetInnerHTML={{ "__html": "&copy; " }} />
                            Sparly 2021
                        </Link>
                    </p>
            </div>
        </div>
    )
}

export default Navigation;