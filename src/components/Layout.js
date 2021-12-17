import Navigation from "./Navigation";

const Layout = ({ children }) => {
    return (
        <div className="md:flex h-screen">
            <Navigation balance="18247.00" userName="nickname" currencySymbol="$" familyName="Studenci" />
            <main className="w-full overflow-auto">
                { children }
            </main>
        </div>
    )
}

export default Layout;