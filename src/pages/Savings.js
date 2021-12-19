import Layout from "../components/Layout";
import { useState } from "react";
import SavingGoal from "../components/Savings/SavingGoal";

const Savings = () => {


    const [isAddForm, setisAddForm] = useState(true)

    const zmien2 = () => {
        setisAddForm(!isAddForm)

    }

    return (
        <Layout>
            <main>
                <div className={`border-solid border-2 border-black-600 py-5 text-center text-3xl rounded-md ${isAddForm ? "h-32" : "h-60"}`}>
                    Your savings

                    <div className="w-96 mx-auto mt-2">
                        <button className="w-44 h-11 border-solid border-2 rounded-md text-lg  hover:bg-black-100" onClick={zmien2}>Add goal</button>

                    </div>
                    {
                        isAddForm ? ("") : (
                            <div class="flex justify-center mt-5">
                                <div className="mb-3 lg:w-60">
                                    <label for="exampleFormControlInput1" className="form-label text-xl inline-block mb-1 text-gray-700"
                                    >Goal name</label
                                    >
                                    <input
                                        type="text"
                                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out mx-2 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        id="exampleFormControlInput1"
                                        placeholder="Goal name"
                                    />

                                </div>
                                <div className="mb-3 lg:w-60">
                                    <label for="exampleNumber0" className="form-label text-xl inline-block mb-1 text-gray-700"
                                    >Goal Amount</label
                                    >
                                    <input
                                        type="number"
                                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out mx-2 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        id="exampleNumber0"
                                        placeholder="Goal Amount"
                                    />
                                </div>

                                <div className="mb-3 lg:w-60">
                                    <label for="exampleFormControlInput1" className="form-label text-xl inline-block mb-1 text-gray-700"
                                    >Completion Date</label
                                    >
                                    <input type="date" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out mx-2 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"></input>

                                </div>
                                <div className="mb-3 lg:w-60">
                                    <label for="exampleNumber0" className="form-label text-xl inline-block mb-1 text-gray-700"
                                    >Time interval</label
                                    >
                                    <input
                                        type="number"
                                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out mx-2 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        id="exampleNumber0"
                                        placeholder="Time interval"
                                    />
                                </div>
                                <div className="mb-3 lg:w-60">
                                    <label for="exampleFormControlInput1" className="form-label text-xl inline-block mb-1 text-gray-700"
                                    >Description</label
                                    >
                                    <input
                                        type="text"
                                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out mx-2 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        id="exampleFormControlInput1"
                                        placeholder="Description"
                                    />

                                </div>

                                <button className="w-44 h-10 border-solid border-2 rounded-md text-lg  hover:bg-black-100 mx-4 mt-10">Submit</button>

                            </div>

                        )


                    }



                </div>
                

                
                <SavingGoal title="Goal name 1"/>

                <SavingGoal title="Goal name 2"/>

                <SavingGoal title="Goal name 3"/>

                {/* miejsce na drugi cel */}
            </main>
        </Layout>
    )
}

export default Savings;