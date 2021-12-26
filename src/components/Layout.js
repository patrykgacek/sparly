import Navigation from "./Navigation";

const Layout = ({ children }) => {
    return (
        <div className="md:flex h-screen">
            <Navigation />
            <main className="w-full overflow-auto">
                { children }
            </main>
        </div>
    )
}

export default Layout;