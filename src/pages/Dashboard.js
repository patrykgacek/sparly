import Layout from "../components/Layout";
import { useState } from "react";

const Dashboard = () => {
    const [isButtonPressed, setButtonPressed] = useState(true);
    const Dodaj = () => {
        setButtonPressed(!isButtonPressed)
    }
    const Zatwierdź = () => {

    }
    const singleChecked = () => {

    }
    return (
        <Layout>
            <div className={`border-solid border-2 border-black-600 py-5 text-center text-3xl rounded-md`}> Budżet</div>
            <h4>Dostępne środki:</h4>
            <h1 id="stankonta">1498.00</h1>
            <div className="flex justify-left">
                <button className="w-44 h-10 border-solid border-2 rounded-md text-lg  hover:bg-black-100" onClick={Dodaj}>Dodaj</button>
            </div>
            {
                isButtonPressed ? ("") :
                    <div className="flex justify-left">
                        <div className="mb-3 xl:w-100">
                            <div className="flex justify-left">
                                <div className="mb-3 xl:w-1/5">
                                    <select className="form-select appearance-none
                                     block
                                     w-30
                                     px-3
                                     py-1.5
                                     text-base
                                     font-normal
                                     text-gray-700
                                     bg-white bg-clip-padding bg-no-repeat
                                     border border-solid border-gray-300
                                     rounded
                                     transition
                                     ease-in-out
                                     m-0
                                     focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                                        <option value="1">Dochód</option>
                                        <option value="2">Wydatek</option>
                                    </select>
                                </div>
                                <div className="mb-3 xl:w-1/2">
                                    <input
                                        type="number"
                                        className="
                                         form-control
                                         block
                                         w-44
                                         px-3
                                         py-1.5
                                         text-base
                                         font-normal
                                         text-gray-700
                                         bg-white bg-clip-padding
                                         border border-solid border-gray-300
                                         rounded
                                         transition
                                         ease-in-out
                                         m-0
                                         focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                                         "
                                        id="exampleNumber0"
                                        placeholder="Ilość"
                                    />
                                </div>
                                <button className="w-44 h-10  border-solid border-2 rounded-md text-lg  hover:bg-black-100" onClick={Zatwierdź}>Zatwierdź</button>
                            </div>
                        </div>
                    </div>
            }
            <div className="border-solid border-2 border-black-600 py-5 text-center text-3xl rounded-md">Historia
                <div className="flex flex-col">
                    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 inline-block w-100 sm:px-6 lg:px-8">
                            <div className="overflow-hidden">
                                <table className="w-60">
                                    <thead className="border-b">
                                        <tr>
                                            <th scope="col" className="text-sm font-medium text-gray-900 w-1/3 px-6 py-4 text-left">
                                                #
                                            </th>
                                            <th scope="col" className="text-sm font-medium text-gray-900 w-1/3 px-6 py-4 text-left">
                                                Ilość
                                            </th>
                                            <th scope="col" className="text-sm font-medium text-gray-900 w-1/3 px-6 py-4 text-left">
                                                Data
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                1000.00
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                06/12/2021
                                            </td>
                                            <button className="w-40 h-10  border-solid border-2 rounded-md text-lg  hover:bg-black-100" onClick={Zatwierdź}>Edytuj</button>
                                            <button className="w-40 h-10  border-solid border-2 rounded-md text-lg  hover:bg-black-100" onClick={Zatwierdź}>Usuń</button>
                                        </tr>
                                        
                                        <tr className="bg-white border-b">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2</td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                -2.00
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                10/12/2021
                                            </td>
                                            <button className="w-40 h-10  border-solid border-2 rounded-md text-lg  hover:bg-black-100" onClick={Zatwierdź}>Edytuj</button>
                                            <button className="w-40 h-10  border-solid border-2 rounded-md text-lg  hover:bg-black-100" onClick={Zatwierdź}>Usuń</button>
                                        </tr>
                                        <tr className="bg-white border-b">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">3</td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                500.00
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                11/12/2021
                                            </td>
                                            <button className="w-40 h-10  border-solid border-2 rounded-md text-lg  hover:bg-black-100" onClick={Zatwierdź}>Edytuj</button>
                                            <button className="w-40 h-10  border-solid border-2 rounded-md text-lg  hover:bg-black-100" onClick={Zatwierdź}>Usuń</button>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Layout>
    )
}

export default Dashboard;