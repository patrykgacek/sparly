import { faChartPie, faCog, faCoins, faInfo, faPiggyBank, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import NavItem from "./NavItem";

const Navigation = () => {
    return (
        <div className="md:w-56 p-3">
            <div className="h-full md:overflow-auto">
                    <NavItem icon={faPiggyBank} to='/savings'>Savings</NavItem>
                    <NavItem icon={faChartPie} to='/statistics'>Statistics</NavItem>
                    <NavItem icon={faCoins} to='/dashboard'>Budget</NavItem>
                    <NavItem icon={faInfo} to='/findmore'>Find more</NavItem>
                    <NavItem icon={faCog} to='/settings'>Settings</NavItem>
                    <NavItem icon={faSignOutAlt} to='/'>Logout</NavItem>
            </div>
        </div>
    )
}

export default Navigation;