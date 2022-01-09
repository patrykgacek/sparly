import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react"
import { Link } from "react-router-dom";
import { useDatabase } from "../context/DatabaseContext";
import { EXPENSE, USER_INFO } from "../constans";
import Layout from "../components/Layout";

const BazaTesty2 = () => {
    const { expense, setLoadExpense, income, setLoadIncome, userInfo } = useDatabase()

    useEffect(() => {
        setLoadExpense(true)
        setLoadIncome(true)
    })

    return (
        <Layout>
        <table className="min-w-full divide-y divide-gray-200 ">
            <thead className="bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <tr>
                    <th className="px-6 py-3"><Link to='/dashboard' className="text-blue-600">Key</Link></th>
                    <th className="px-6">Name</th>
                    <th className="px-6">Date</th>
                    <th className="px-6">Price</th>
                    <th className="px-6">Family Member</th>
                    <th className="px-6">Category</th>
                    <th className="px-6">Description</th>
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                {!!expense ? (
                    Object.keys(expense).length ? (
                        Object.keys(expense).map(key => { 
                            return (
                                <tr key={key}>
                                    <td className="px-6 py-3">💲 {key}</td>
                                    <td className="px-6">{expense[key][EXPENSE.NAME]}</td>
                                    <td className="px-6">{expense[key][EXPENSE.DATE]}</td>
                                    <td className="px-6">{expense[key][EXPENSE.PRICE]} {userInfo[USER_INFO.CURRENCY_SYMBOL]}</td>
                                    <td className="px-6">{expense[key][EXPENSE.FAMILY_MEMBER]}</td>
                                    <td className="px-6">{expense[key][EXPENSE.CATEGORY]}</td>
                                    <td className="px-6">{expense[key][EXPENSE.DESCRIPTION]}</td>
                                </tr>
                            )
                        })
                    ) : <tr><td className="px-6 py-3" colSpan="7">No data to display. Add your first expense!</td></tr>
                ) : <tr><td className="px-6 py-3" colSpan="7"><FontAwesomeIcon icon={faCircleNotch} spin /> Loading data...</td></tr>}
            </tbody>
        </table>
        <div className="p-4 bg-black text-white text-5xl">INCOME</div> 
        <table className="min-w-full divide-y divide-gray-200 ">
            <thead className="bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <tr>
                    <th className="px-6 py-3"><Link to='/dashboard' className="text-blue-600">Key</Link></th>
                    <th className="px-6">Name</th>
                    <th className="px-6">Date</th>
                    <th className="px-6">Price</th>
                    <th className="px-6">Family Member</th>
                    <th className="px-6">Category</th>
                    <th className="px-6">Description</th>
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                {!!income ? (
                    Object.keys(income).length ? (
                        Object.keys(income).map(key => { 
                            return (
                                <tr key={key}>
                                    <td className="px-6 py-3">💲 {key}</td>
                                    <td className="px-6">{income[key][EXPENSE.NAME]}</td>
                                    <td className="px-6">{income[key][EXPENSE.DATE]}</td>
                                    <td className="px-6">{income[key][EXPENSE.PRICE]} {userInfo[USER_INFO.CURRENCY_SYMBOL]}</td>
                                    <td className="px-6">{income[key][EXPENSE.FAMILY_MEMBER]}</td>
                                    <td className="px-6">{income[key][EXPENSE.CATEGORY]}</td>
                                    <td className="px-6">{income[key][EXPENSE.DESCRIPTION]}</td>
                                </tr>
                            )
                        })
                    ) : <tr><td className="px-6 py-3" colSpan="7">No data to display. Add your first expense!</td></tr>
                ) : <tr><td className="px-6 py-3" colSpan="7"><FontAwesomeIcon icon={faCircleNotch} spin /> Loading data...</td></tr>}
            </tbody>
        </table>
        </Layout>
    )
}

export default BazaTesty2