import { useState } from "react"
import { DASHBOARD_ITEM } from "../../constans"
import { useDatabase } from "../../context/DatabaseContext"
const DashboardItem = props => {

    return (
        <tbody>
        <tr className="border-b">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
               {props.type}{props.amount}
            </td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {props.date}
            </td>
        </tr>
    </tbody>
    )
}
export default DashboardItem;