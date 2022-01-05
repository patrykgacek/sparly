import { useDatabase } from "../context/DatabaseContext";

const HeaderBar = () => {
    const {userInfo} = useDatabase()

    return (
        <div className="text-sm text-center border-l-4 border-green-500">
            <h2 className="text-lg font-semibold mb-2">
                {userInfo
                ? userInfo.familyName
                : <span className="text-gray-500">Loading...</span>}
            </h2>
            <p className="mb-3">
                Hi {userInfo
                ? userInfo.name
                :  <span className="text-gray-500">...</span>}!
            </p>
            <div>
                Your balance
                <p className="text-xl font-semibold">
                    {userInfo ? userInfo.balance : 0} {userInfo ? userInfo.currencySymbol : '$'}
                </p>
            </div>
        </div>
    )
}

export default HeaderBar;