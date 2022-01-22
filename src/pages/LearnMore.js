import Layout from "../components/Layout";
import { Link } from "react-router-dom";

const LearnMore = () => {
    return (
        <Layout>
            <div className={`border-solid border-2 border-black-600 py-5 text-center text-3xl rounded-md`}> Learn more about money </div>
            <div className="learnmorestyle mt-10" >

                <div className="rounded-lg shadow-lg bg-white max-w-sm">
                    <a href="#!">
                        <img className="rounded-t-lg" src="https://images.pexels.com/photos/2068975/pexels-photo-2068975.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                    </a>
                    <div className="p-6">
                        <h5 className="text-gray-900 text-xl font-medium mb-2">5 Keys To Successfully Managing Your Personal Finances</h5>
                        <p className="text-gray-700 text-base mb-4">
                        Wouldn’t it be nice if there were a magic formula or simple trick that allowed you never to have to worry about money or manage your finances again?
                        </p>
                        <Link to="/learnmore/article01" className=" px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Read article</Link>
                    </div>
                </div>

                <div className="rounded-lg shadow-lg bg-white max-w-sm">
                    <a href="#!">
                        <img className="rounded-t-lg" src="https://images.pexels.com/photos/4475523/pexels-photo-4475523.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                    </a>
                    <div className="p-6">
                        <h5 className="text-gray-900 text-xl font-medium mb-2">Budgeting 101: How to Start Budgeting</h5>
                        <p className="text-gray-700 text-base mb-4">
                        Budgeters are twice as likely to report no financial worries, compared with spenders. There's one simple rule that comes up time and again: You need a budget.
                        </p>
                        <Link to="/learnmore/article02" className=" px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Read article</Link>
                    </div>
                </div>

                <div className="rounded-lg shadow-lg bg-white max-w-sm">
                    <a href="#!">
                        <img className="rounded-t-lg" src="https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                    </a>
                    <div className="p-6">
                        <h5 className="text-gray-900 text-xl font-medium mb-2">10 Best Ways to Save Money</h5>
                        <p className="text-gray-700 text-base mb-4">
                        We all want to save money. And whether it's by denying yourself that $4 mocha latte once a week or putting off an exotic family vacation, everyone has their own way to save.
                        </p>
                        <Link to="/learnmore/article03" className=" px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Read article</Link>
                    </div>
                </div>

                <div className="rounded-lg shadow-lg bg-white max-w-sm">
                    <a href="#!">
                        <img className="rounded-t-lg" src="https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                    </a>
                    <div className="p-6">
                        <h5 className="text-gray-900 text-xl font-medium mb-2">How to save your money during inflation</h5>
                        <p className="text-gray-700 text-base mb-4">
                        Inflation is at an all-time high and it’s getting worse. The increase in prices is digging holes in wallets and savings accounts.
                        </p>
                        <Link to="/learnmore/article04" className=" px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Read article</Link>
                    </div>
                </div>

            </div>
        </Layout>
    )
}

export default LearnMore;