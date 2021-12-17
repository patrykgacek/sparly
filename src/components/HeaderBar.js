const HeaderBar = ({balance, userName, currencySymbol, familyName}) => {
    return (
        <div className="text-sm text-center border-l-4 border-green-500">
            <h2 className="text-lg font-semibold mb-2">
                {familyName}
            </h2>
            <p className="mb-3">
                Hi {userName}!
            </p>
            <p>
                Your balance
                <p className="text-xl font-semibold">
                    {balance} {currencySymbol}
                </p>
            </p>
        </div>
    )
}

export default HeaderBar;